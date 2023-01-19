import java.util.*;
import java.io.IOException;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.conf.*;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapred.*;
import org.apache.hadoop.util.*;

public class Forest {
	public static class ForestMapper extends MapReduceBase implements 
	Mapper<Object, Text, Text, FloatWritable> {
		boolean flag = false;
		String month = null;
		float area = 0f;
		// Map Only function
		public void map(Object key, Text value,
										OutputCollector<Text, FloatWritable> output,
										Reporter reporter)
		throws IOException{
			String line[] = value.toString().split(",",13);
			if(flag){
				month = line [2];
				if(month.equals("aug"))
					area = area + Float.parseFloat(line[12]);
			}

		flag = true;
		}

		// clean up called at the end of Mapper class
		// this way we only write on context just once!
		// one time activity is possible with cleanup()
		public void cleanup(OutputCollector<Text, FloatWritable> output) 
		throws IOException, InterruptedException{
			output.collect(new Text(month), new FloatWritable(area));
		}
	}

	public static void main(String args[]) throws Exception
	{
		JobConf conf = new JobConf(Forest.class);
		conf.setJobName("Forest Fires in August");
		conf.setOutputKeyClass(Text.class);
		conf.setOutputValueClass(FloatWritable.class);
		
		conf.setOutputFormatClass(TextOutputFormat.class);
		conf.setInputFormatClass(TextInputFormat.class);
		
		conf.setMapperClass(ForestMapper.class);
		conf.setNumReduceTasks(0);	

		FileInputFormat.addInputPath(conf, new Path(args[0]));
		FileOutputFormat.setOutputPath(conf, new Path(args[1]));
		
		JobClient.runJob(conf);	
	}
}
