package bean;

import annotation.Regexp;

public class Reservation {
	
	Integer res_voy_id = null;
	Integer res_cli_id = null;
	Integer res_pho_id = null;
	String res_etat = null;
	String res_commentaire = null;
	Integer res_note = null;
	
	public Reservation() {
		
	}
	
	public Reservation(int res_voy_id, int res_cli_id, int res_pho_id, String res_etat, String res_commentaire, int res_note) {
		this.res_voy_id = res_voy_id;
		this.res_cli_id = res_cli_id;
		this.res_pho_id = res_pho_id;
		this.res_etat = res_etat;
		this.res_commentaire = res_commentaire;
		this.res_note = res_note;
	}

	public Integer getRes_voy_id() {
		return res_voy_id;
	}

	public void setRes_voy_id(Integer res_voy_id) {
		this.res_voy_id = res_voy_id;
	}

	public Integer getRes_cli_id() {
		return res_cli_id;
	}

	public void setRes_cli_id(Integer res_cli_id) {
		this.res_cli_id = res_cli_id;
	}

	public Integer getRes_pho_id() {
		return res_pho_id;
	}

	public void setRes_pho_id(Integer res_pho_id) {
		this.res_pho_id = res_pho_id;
	}

	public String getRes_etat() {
		return res_etat;
	}

	public void setRes_etat(String res_etat) {
		this.res_etat = res_etat;
	}

	public String getRes_commentaire() {
		return res_commentaire;
	}

	public void setRes_commentaire(String res_commentaire) {
		this.res_commentaire = res_commentaire;
	}

	public Integer getRes_note() {
		return res_note;
	}

	public void setRes_note(Integer res_note) {
		this.res_note = res_note;
	}



	
}
