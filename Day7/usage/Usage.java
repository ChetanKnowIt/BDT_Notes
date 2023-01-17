import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.FloatWritable;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import java.util.StringTokenizer;
import java.io.IOException;

public class Usage {
	public static class UsageMapper extends Mapper<Object, Text, Text, FloatWritable> {

		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{

			FloatWritable avg = new FloatWritable();
			String line = value.toString();
			StringTokenizer st = new StringTokenizer(line,"\t");
			int sum = 0;
			String uname = "";
			uname = st.nextToken();
			while(st.hasMoreTokens()){
				sum = sum + Integer.parseInt(st.nextToken());
				}				
				avg.set((float)sum/7);
				context.write(new Text(uname), avg);			
			} 
		}

	public static class UsageReducer extends Reducer<Text, FloatWritable, Text, FloatWritable> {
		public void reduce(Text key, Iterable<FloatWritable> values, Context context) 
		throws IOException, InterruptedException{
							float avg_val = 0f;
			for (FloatWritable num: values){
				avg_val = num.get();
				if(avg_val>5){
					context.write(key,new FloatWritable(avg_val));
				}
			}
		}
	}


	public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job(conf, "Usage");
		
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(FloatWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(UsageMapper.class);
		job.setReducerClass(UsageReducer.class);		

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
