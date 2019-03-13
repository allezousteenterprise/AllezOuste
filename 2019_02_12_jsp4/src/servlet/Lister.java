package servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;

import base.Base;
import bean.Voyage;

/**
 * Servlet implementation class Lister
 */
@WebServlet("/Lister")
public class Lister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Lister() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Base base = new Base();
		ArrayList<Voyage> lst = base.listerVoyages();
		base.fermer();
		
		JsonGenerator generator = new JsonFactory().
				createGenerator(response.getOutputStream());
		generator.setCodec(new ObjectMapper());
		generator.writeObject(lst); 
		generator.close();
		
		/*request.setAttribute("lst", lst);
		System.out.println(" test : "+lst.size());
		request.getServletContext()
		.getRequestDispatcher("/WEB-INF/lib/lister.jsp")
			.forward(request,  response);*/
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
