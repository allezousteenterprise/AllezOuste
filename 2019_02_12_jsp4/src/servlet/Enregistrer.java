package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import base.Base;
import bean.Voyage;
import validation.Validation;

/**
 * Servlet implementation class Enregistrer
 */
@WebServlet("/Enregistrer")
public class Enregistrer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Enregistrer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// chargement page (vue)
		
		request.getServletContext()
			.getRequestDispatcher("/WEB-INF/enregistrer.jsp")
				.forward(request,  response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// enregistrement du livre
		
		Validation validation = new Validation();
		validation.regexp(
				Voyage.class,
				"voy_id",
				request.getParameter("voy_id")
				);
		validation.regexp(
				Voyage.class,
				"voy_dateDebut",
				request.getParameter("voy_dateDebut")
				);
		validation.regexp(
				Voyage.class,
				"voy_dateFin",
				request.getParameter("voy_dateFin")
				);
		validation.regexp(
				Voyage.class,
				"voy_prix",
				request.getParameter("voy_prix")
				);
		validation.regexp(
				Voyage.class,
				"voy_type",
				request.getParameter("voy_type")
				);
		validation.regexp(
				Voyage.class,
				"voy_nom",
				request.getParameter("voy_nom")
				);


		if (validation.isValide()) {
			// enregistrement du livre
			
			Voyage voyage = new Voyage();
			voyage.setVoy_id(Integer.parseInt(validation.getValeurs().get("voy_id")));
			voyage.setVoy_dateDebut(validation.getValeurs().get("voy_dateDebut"));
			voyage.setVoy_dateFin(validation.getValeurs().get("voy_dateFin"));
			voyage.setVoy_prix(Integer.parseInt(validation.getValeurs().get("voy_prix")));
			voyage.setVoy_type(validation.getValeurs().get("voy_type"));
			voyage.setVoy_nom(validation.getValeurs().get("voy_nom"));
			
			Base base = new Base();
			base.enregistrerVoyage(voyage);
			base.fermer();
			
			System.out.println("Voyage enregistré : "+voyage.getVoy_nom());

			// redirection vers la page d'accueil
			// en demandant à la page d'accueil
			// d'indiquer qu'un livre a été enregistré
			// appel servlet Accueil
			
			request.getSession().setAttribute
				("mess", "Le voyage " + voyage.getVoy_nom() + " a été enregistré");
			response.sendRedirect("Accueil");
		}
		else {
			// réaffichage du formulaire
			
			request.setAttribute("validation", validation);
			// equivalent jsp:useBean scope="request"
			
			doGet(request,response);
		}
		
	}

}



















