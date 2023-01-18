import java.util.*;
import java.io.IOException;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapred.*;
import org.apache.hadoop.util.*;
public class FB{
	public static class InsightMapper extends MapReduceBase implements 
	Mapper< Object,Text, IntWritable,	IntWritable> {
		boolean flag = false;

		// Map function
		public void map(Object key, Text value,OutputCollector<IntWritable, IntWritable> output,
			Reporter reporter) throws IOException{
			String line[] = value.toString().split(",",10);
			if(flag){
				String type = line [1];
				String date = line [2];
				String split_date[] = date.split("/",3);
				int month = Integer.parseInt(split_date[0]);

				int shares = Integer.parseInt(line[5]);
				if(date.contains("2017"))
					output.collect(new IntWritable(month),new IntWritable(shares));
		}

		flag = true;
		}
	}
		// Reducer class
	public static class InsightReducer extends MapReduceBase implements Reducer
	< IntWritable,IntWritable, IntWritable,FloatWritable >{
			// Reduce Function
			public void reduce(IntWritable key,Iterator <IntWritable> values,
				OutputCollector<IntWritable,FloatWritable> output,Reporter reporter) throws IOException{
			int add=0, total=0;
			while(values.hasNext()){
				add = add + values.next().get();
				total++;
			}
			output.collect(key,new FloatWritable(add/(float)total));
		}
	}


	public static void main(String args[]) throws Exception
	{
		JobConf conf = new JobConf(FB.class);
		conf.setJobName("Likes Insight");
		conf.setMapOutputKeyClass(IntWritable.class);
		conf.setMapOutputValueClass(IntWritable.class);
		conf.setOutputKeyClass(IntWritable.class);
		conf.setOutputValueClass(FloatWritable.class);
		conf.setMapperClass(InsightMapper.class);
		conf.setReducerClass(InsightReducer.class);
		conf.setInputFormat(TextInputFormat.class);
		conf.setOutputFormat(TextOutputFormat.class);
		FileInputFormat.setInputPaths(conf,new Path(args[0]));
		FileOutputFormat.setOutputPath(conf,new Path(args[1]));
		JobClient.runJob(conf);
	}
}