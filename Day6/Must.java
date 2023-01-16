import java.util.StringTokenizer;

class Must { 

	static boolean isNumber(String s){
		for(int i = 0;i < s.length(); i++){
			char ch = s.charAt(i);
			if(ch < '0' || ch > '9')
				return false;
		}
		return true;
	}

	public static void main(String args[]){
	String s = "They 1st are 21 and 22 year old.";

	// create StringTokenizer object
	StringTokenizer st = new StringTokenizer(s);

	while(st.hasMoreTokens()){
		String tkn = st.nextToken();
		if(isNumber(tkn)){
			System.out.println("age"+","+tkn);
			}
		}
	}
}