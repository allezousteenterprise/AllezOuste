package validation;

import java.lang.reflect.Field;
import java.util.Hashtable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import annotation.Regexp;

public class Validation {

	
	boolean valide = true;
	// indique si une erreur a été détectée
	
	Hashtable<String, String> valeurs =
			new Hashtable<String, String>();
	// contiendra les valeurs saisies dans les champs
	// ex : ("auteur", "lauteursaisi")
	
	Hashtable<String, String> erreurs = 
			new Hashtable<String, String>();
	// contiendra les erreurs éventuelles
	// ex: ("annee","L'année doit comporter 4 chiffres")

	public boolean estVide(String param, String val,
			String mess) {
		boolean res = false;
	
		if (val == null) val = "";
		val = val.trim();
		
		if (val.length() == 0) {
			res = true;
			valide = false;
			erreurs.put(param,mess);
		}
		
		valeurs.put(param,val);
		
		return res;
	}
		
	public boolean regexp(Class c, String param, String val) {
		
		
		String regexp = "";
		String mess = "";
	
		boolean annotationExiste = true;

		try {
			Field f = c.getDeclaredField(param);
			Regexp r = f.getDeclaredAnnotation(Regexp.class);
			regexp = r.expr();
			mess = r.mess();
		}
		catch (Exception e) {
			annotationExiste = false;
		}
			
		if (annotationExiste) {
			boolean res = true;
			
			if (val == null) val = "";
			val = val.trim();

			Pattern pattern = Pattern.compile(regexp);
			Matcher matcher = pattern.matcher(val);
			if (!matcher.matches()) {
				res = false;
				valide = false;
				erreurs.put(param,mess);
			}

			valeurs.put(param,val);
			
			return res;

		}
		else {
			return true;
		}
		
	}

	public boolean isValide() {
		return valide;
	}

	public void setValide(boolean valide) {
		this.valide = valide;
	}

	public Hashtable<String, String> getValeurs() {
		return valeurs;
	}

	public void setValeurs(Hashtable<String, String> valeurs) {
		this.valeurs = valeurs;
	}

	public Hashtable<String, String> getErreurs() {
		return erreurs;
	}

	public void setErreurs(Hashtable<String, String> erreurs) {
		this.erreurs = erreurs;
	}


	
}
