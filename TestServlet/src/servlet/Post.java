package servlet;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Post {

	public static String send(String url, Reader r) { // p1=1&p2=2
		
		String res = "";
		return res;
		

	}
	
	public static String send(String url, String params) { // p1=1&p2=2
		
		String res = "";
		
		try {
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
	
			con.setRequestMethod("POST");
	
			
			// Send post request
			con.setDoOutput(true);
			DataOutputStream wr = new DataOutputStream(con.getOutputStream());
			wr.writeBytes(params);
			wr.flush();
			wr.close();
			
			BufferedReader in = new BufferedReader(
			        new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();
	
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			
			res = response.toString();
			
			in.close();
		}
		catch (Exception e) {
			System.out.println("Post.send error "+e.getMessage());
		}
		
		return res;
		
	}
}
