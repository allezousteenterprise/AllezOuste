package base;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.ResourceBundle;

import bean.Voyage;

public class Base {
	
	static {
		try {
			Class.forName
				("com.mysql.cj.jdbc.Driver").
					newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}	

	}
	
	Connection connection = null;
	
	public Base() {
		String url = null;
		String user = null;
		String password = null;

		// accès au ressources (fichier base/config.properties)
		try {
			ResourceBundle rs = 
				ResourceBundle.getBundle("base/config");
			url = rs.getString("url");
			user = rs.getString("user");
			password = rs.getString("password");
			System.out.println("url = "+url);
			System.out.println("user = "+user);
		}
		catch (Exception e) {
			System.out.println("Erreur acces ressources "+e.getMessage());
		}
		
		// connexion BD
		try  {
			connection = DriverManager.getConnection(url, user, password);
		}
		catch (Exception e) {
			System.out.println("Erreur connexion "+e.getMessage());
		}
	}
	
	public void fermer() {
		try {if (connection != null) connection.close();} catch (Exception e) {}
	}

	public ArrayList<Voyage> listerVoyages() {
		
		ArrayList<Voyage> res = new ArrayList<>();
		
		String sql = "select * from t_voyage_voy";
		
		try {
			PreparedStatement ps = connection.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				int voy_id = rs.getInt("voy_id");
				int voy_pho_id = rs.getInt("voy_pho_id");
				String voy_dateDebut = rs.getString("voy_dateDebut");
				String voy_dateFin = rs.getString("voy_dateFin");
				int voy_prix = rs.getInt("voy_prix");
				String voy_type = rs.getString("voy_type");
				String voy_nom = rs.getString("voy_nom");
				Voyage v = new Voyage(voy_id, voy_pho_id, voy_dateDebut, voy_dateFin, voy_prix, voy_type, voy_nom);
				v.setVoy_id(voy_id);
				res.add(v);
			}
		}
		catch (Exception e) {
			System.out.println(
					"Erreur listerLivres "+e.getMessage());
		}
		
		return res;
	}
	
	public boolean enregistrerVoyage(Voyage l)  {
		boolean res = false;
		String sql = "insert into t_voyage_voy (voy_id, voy_pho_id, voy_dateDebut, voy_dateFin, voy_prix, voy_type, voy_nom) values (?, ?, ?, ?, ?, ?, ?)";
		try {
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setInt(1, l.getVoy_id());
			ps.setInt(2, l.getVoy_pho_id());
			ps.setString(3, l.getVoy_dateDebut());
			ps.setString(4, l.getVoy_dateFin());
			ps.setInt(5, l.getVoy_prix());
			ps.setString(6, l.getVoy_type());
			ps.setString(7, l.getVoy_nom());
			System.out.println("sql = " +ps.toString());
			int nb = ps.executeUpdate();
			if (nb == 1) res = true;


		} catch (Exception e) {
			System.out.println(
					"Erreur enregistrerVoyage "+e.getMessage());
		}

		return res;
	}


	public static void main(String [] args) {
		Base base = new Base();
	

		Voyage voyage = new Voyage(45,2, "2019-05-04","2019-07-04",500, "Croisière", "Voyage Brest");
		base.enregistrerVoyage(voyage);

		ArrayList<Voyage> lst = base.listerVoyages();
		for (Voyage l : lst) {
			System.out.println("nom = "+l.getVoy_nom());
		}
	}

	
		
}
