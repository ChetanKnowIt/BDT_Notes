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

public class MaxTemp {
	public static class TempMapper extends Mapper<Object, Text, Text, FloatWritable> {

		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{
			String line[] = value.toString().split("\\s+");
			float maxTemp = Float.parseFloat(line[5]);
			String year = line[1].substring(0,4);
			if(maxTemp < 60.0f && maxTemp > -60.0f)
				context.write(new Text(year), new FloatWritable(maxTemp));
			}

		} 

	// Reducer class
	public static class TempReducer extends Reducer
	< Text,FloatWritable, Text,FloatWritable >{

		String year = null;
		float globalTemp = 0.0f;

		// Reduce Function
		public void reduce(Text key,Iterable<FloatWritable> values, Context context)
		throws IOException, InterruptedException{
			float std = 0.0f;
			for (FloatWritable temp: values){
				if(temp.get() > std)
					std = temp.get();
			}
			if(std > globalTemp){
				globalTemp = std;
				year = key.toString();
			}
		}
		
		// clean up called at the end of Mapper class
		// this way we only write on context just once!
		// one time activity is possible with cleanup()
		public void cleanup(Context context) 
		throws IOException, InterruptedException{
			context.write(new Text("Hottest year: " + year), 
										new FloatWritable(globalTemp));
		}

	}
		
	public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job(conf, "Hottest Year");

		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(FloatWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(TempMapper.class);
		job.setReducerClass(TempReducer.class);
		//job.setNumReduceTasks(0);

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
