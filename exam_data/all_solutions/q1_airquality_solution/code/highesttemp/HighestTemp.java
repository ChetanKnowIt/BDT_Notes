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
import org.apache.hadoop.util.*;
import java.io.IOException;
import java.util.*;

public class HighestTemp {
	public static class HighestTempMapper extends Mapper<Object, Text, Text, IntWritable> {
	boolean flag = false;
		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{
			String line[] = value.toString().split(",",10);
			if(flag){
				String sixth = line [5];
				String day_1 = line[6];
				if(sixth.equals("6")){
					int temp = Integer.parseInt(line[4]);
				context.write(new Text(day_1),new IntWritable(temp));	
				}
		}

		flag = true;
		}

		} 

	// Reducer class
	public static class HighestTempReducer extends Reducer
	< Text,IntWritable, Text,IntWritable >{

		String day = null;
		int globalHighT = 0;

		// Reduce Function
		public void reduce(Text key,Iterable<IntWritable> values, Context context)
		throws IOException, InterruptedException{
			int std = 0;
			for (IntWritable t: values){
				if(t.get() > std)
					std = t.get();
			}
			if(std > globalHighT){
				globalHighT = std;
				day = key.toString();
			}
		}
		
		// clean up called at the end of Mapper class
		// this way we only write on context just once!
		// one time activity is possible with cleanup()
		public void cleanup(Context context) 
		throws IOException, InterruptedException{
			context.write(new Text("Day when Highest Temperature in 6th Month: " + day + " with Temperature: "), 
										new IntWritable(globalHighT));
		}

	}
		
	public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job(conf, "Day when Highest Temp");

		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(HighestTempMapper.class);
		job.setReducerClass(HighestTempReducer.class);
		//job.setNumReduceTasks(0);

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
