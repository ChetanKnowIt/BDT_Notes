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

public class AvgComments {
	public static class AvgCommentsMapper extends Mapper<Object, Text, Text, FloatWritable> {
		boolean flag = false;
		int sum = 1;
		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{
			String line[] = value.toString().split(",",12);	
			if(flag){
				int shares = Integer.parseInt(line[4]);
				sum = sum+shares;
				}
			flag = true; 
		}
		// clean up called at the end of Mapper class
		// this way we only write on context just once!
		// one time activity is possible with cleanup()
		public void cleanup(Context context) 
		throws IOException, InterruptedException{
			context.write(new Text("Average Comments: "), new FloatWritable(sum/7050f));
		}


	}
		public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job(conf, "Average Comments");

		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(FloatWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(AvgCommentsMapper.class);
		job.setNumReduceTasks(0);

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
