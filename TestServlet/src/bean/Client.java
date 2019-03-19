package bean;

import annotation.Regexp;

public class Client {
	
	Integer cli_id = null;
	String cli_pseudo = null;
	String cli_mdp = null;
	String cli_prenom = null;
	String cli_nom = null;
	String cli_mail = null;
	
	public Client() {
		
	}
	
	public Client(int cli_id, String cli_pseudo, String cli_mdp, String cli_prenom, String cli_nom, String cli_mail) {
		this.cli_pseudo = cli_pseudo;
		this.cli_mdp = cli_mdp;
		this.cli_prenom = cli_prenom;
		this.cli_nom = cli_nom;
		this.cli_mail = cli_mail;
	}

	public String getCli_pseudo() {
		return cli_pseudo;
	}

	public void setCli_pseudo(String cli_pseudo) {
		this.cli_pseudo = cli_pseudo;
	}

	public String getCli_mdp() {
		return cli_mdp;
	}

	public void setCli_mdp(String cli_mdp) {
		this.cli_mdp = cli_mdp;
	}

	public Integer getCli_id() {
		return cli_id;
	}

	public void setCli_id(Integer cli_id) {
		this.cli_id = cli_id;
	}

	public String getCli_prenom() {
		return cli_prenom;
	}

	public void setCli_prenom(String cli_prenom) {
		this.cli_prenom = cli_prenom;
	}

	public String getCli_nom() {
		return cli_nom;
	}

	public void setCli_nom(String cli_nom) {
		this.cli_nom = cli_nom;
	}

	public String getCli_mail() {
		return cli_mail;
	}

	public void setCli_mail(String cli_mail) {
		this.cli_mail = cli_mail;
	}

	
}
