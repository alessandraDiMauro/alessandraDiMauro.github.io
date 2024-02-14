function afficheVille() 
            {
                //Récupération de la valeur du nom de la ville du select via son id
                let nomVilleChoisie= document.getElementById("villesListe").value;

                let villes=document.getElemenstByClassName("ville"); // variable tableau avec des data


                // parcourir le tableau villes

                for (i=0; i<villes.length; i++)
                { // l’attribut id de l’élément est comparée à la ville choisie
                    if (villes[i].id == nomVilleChoisie)
                { // garder l'élément visible -> ELEMENT.style.display= "";
                  // villes[i].style.display= ""; 
                  villes[i].style.dysplay="block";
                } else
                { // cacher l'élément -> ELEMENT.style.display= "none";
                    villes[i].style.display="none";

                }
                }



            }