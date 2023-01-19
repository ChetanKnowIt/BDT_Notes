class SubStringTest{
	public static void main(String args[]){
		String s = "53877 20140101  2.422  -82.61   35.49     7.4    -6.0     0.7    -0.6     0.0     6.64 C    13.6    -6.1    -0.6    91.9    36.0    74.1   0.365   0.323   0.340   0.403   0.404     3.4     4.1     5.6     6.3     9.1";
		
		// WE TREAT STRING AS ARRAY
		String maxT = s.substring(38,46);
		String year = s.substring(6,10);

		System.out.println(maxT.trim());
		System.out.println(year.trim());		


		// WITH REGEX INSIDE SUBSTRING
		String st[] = s.split("\\s+");
		System.out.println(st[5]);
		System.out.println(st[1].substring(0,4));
	}
}