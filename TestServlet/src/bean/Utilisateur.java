package bean;

import annotation.Regexp;

public class Utilisateur {
	
	String cli_pseudo = null;
	String cli_mdp = null;
	
	public Utilisateur() {
		
	}
	
	public Utilisateur(String cli_pseudo, String cli_mdp) {
		this.cli_pseudo = cli_pseudo;
		this.cli_mdp = cli_mdp;
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

	
}
