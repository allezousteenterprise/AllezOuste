package bean;

import annotation.Regexp;

public class Voyage {

	Integer voy_id = null;
	Integer voy_pho_id = null;
	String voy_dateDebut = null;
	String voy_dateFin = null;
	Integer voy_prix = null;
	String voy_type = null;
	String voy_nom = null;
	
	public Voyage() {
	}
	
	public Voyage(int voy_id, int voy_pho_id, String voy_dateDebut, String voy_dateFin, int voy_prix, String voy_type, String voy_nom) {
		this.voy_id = voy_id;
		this.voy_pho_id = voy_pho_id;
		this.voy_dateDebut = voy_dateDebut;
		this.voy_dateFin = voy_dateFin;
		this.voy_prix = voy_prix;
		this.voy_type = voy_type;
		this.voy_nom = voy_nom;
	}

	public Integer getVoy_id() {
		return voy_id;
	}

	public void setVoy_id(Integer voy_id) {
		this.voy_id = voy_id;
	}
	
	public Integer getVoy_pho_id() {
		return voy_id;
	}

	public void setVoy_pho_id(Integer voy_pho_id) {
		this.voy_pho_id = voy_pho_id;
	}

	public String getVoy_dateDebut() {
		return voy_dateDebut;
	}

	public void setVoy_dateDebut(String voy_dateDebut) {
		this.voy_dateDebut = voy_dateDebut;
	}

	public String getVoy_dateFin() {
		return voy_dateFin;
	}

	public void setVoy_dateFin(String voy_dateFin) {
		this.voy_dateFin = voy_dateFin;
	}

	public Integer getVoy_prix() {
		return voy_prix;
	}

	public void setVoy_prix(Integer voy_prix) {
		this.voy_prix = voy_prix;
	}

	public String getVoy_type() {
		return voy_type;
	}

	public void setVoy_type(String voy_type) {
		this.voy_type = voy_type;
	}

	public String getVoy_nom() {
		return voy_nom;
	}

	public void setVoy_nom(String voy_nom) {
		this.voy_nom = voy_nom;
	}

	
}
