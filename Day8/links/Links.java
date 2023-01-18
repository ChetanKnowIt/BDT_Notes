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

public class Links {
	public static class LinkMapper extends Mapper<Object, Text, Text, IntWritable> {
		boolean flag = false;
		public void map(Object key, Text value, Context context) 
		throws IOException, InterruptedException{
			String line = value.toString();
			if(flag){
				StringTokenizer s = new StringTokenizer(line,",");
				String id = s.nextToken(); // id
				String type = s.nextToken(); // type
				if(type.equals("link")){
					String date = s.nextToken(); // retrieved date token
					int add = 0;
					while(s.hasMoreTokens()){
						int num = Integer.parseInt(s.nextToken());
						add += num;
						}
					context.write(new Text(date), new IntWritable(add));
					}
				}
			flag = true;
		}
	}

	public static void main(String args[]) throws Exception
	{
		Configuration conf = new Configuration();

		Job job = new Job();

		job.setOutputKeyClass(Links.class);
		job.setOutputValueClass(IntWritable.class);
		
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setInputFormatClass(TextInputFormat.class);
		
		job.setMapperClass(LinkMapper.class);
		job.setNumReduceTasks(0);		

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		
		job.waitForCompletion(true);			
	}
}
