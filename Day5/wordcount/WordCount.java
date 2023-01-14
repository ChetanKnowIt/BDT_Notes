import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.IntWritable;
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

public class WordCount {

	public static class WordMapper extends Mapper<Object, Text, Text, IntWritable> {
		Text word = new Text();
		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{

			StringTokenizer s = new StringTokenizer(value.toString());
			while(s.hasMoreTokens()){
				String token = s.nextToken();
				word.set(token);
				context.write(word, new IntWritable(1));
			}

		}

	}

	public static class WordReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
		public void reduce(Text key, Iterable<IntWritable> values, Context context) 
		throws IOException, InterruptedException{

			IntWritable addition = new IntWritable();
			int sum = 0;
			for (IntWritable num: values){
				sum = sum + num.get();
			}
			addition.set(sum);
			context.write(key,addition);

		}

	}

	public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job();

		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(WordMapper.class);
		job.setReducerClass(WordReducer.class);		

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
