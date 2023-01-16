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

public class Marks {
	public static class MarksMapper extends Mapper<Object, Text, Text, IntWritable> {

		boolean isNumber(String s){
		for(int i = 0;i < s.length(); i++){
			char ch = s.charAt(i);
			if(ch < '0' || ch > '9'){
					return false;
					}		
			}
		return true;
		}

		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{

			String line = value.toString();
			line = line.replace(","," ");
			StringTokenizer st = new StringTokenizer(line);
			while(st.hasMoreTokens()){
				String word = st.nextToken();
				if(isNumber(word)){
					context.write(new Text("marks"), new IntWritable(Integer.parseInt(word)));
				}				
			} 
		}
	}

	public static class MarksReducer extends Reducer<Text, IntWritable, Text, FloatWritable> {
		public void reduce(Text key, Iterable<IntWritable> values, Context context) 
		throws IOException, InterruptedException{

			FloatWritable avg = new FloatWritable();
			int sum = 0;
			int len = 0;
			for (IntWritable num: values){
				int m = num.get();
				if(m>=60)
				{
					sum = sum + m;
					len +=1;
				}
			}
			avg.set((float)sum/len);
			context.write(new Text("Average is: "),avg);
		}
	}

	public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job(conf, "Marks");

		job.setMapOutputKeyClass(Text.class);
		job.setMapOutputValueClass(IntWritable.class);
		
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(FloatWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(MarksMapper.class);
		job.setReducerClass(MarksReducer.class);		

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
