# gta-ynov

 ## URL DE PROD
 https://gta-ynov-vuejs.herokuapp.com/

 ## Compte pour tester 

 maxime.rolland23@outlook.com mdp : 123456789

## Tache réaliser 

- Creation de l'API
- Mise en place du formulaire 
- Mise en place du CI basique 
- Authentification 
- Deconexion
- Gestion des rôles 
- Ajouter des utilisateurs
- Déployer l'API en prod

## Tache en cours 

- Mettre en place le planning 

## Contexte 

Développer une application GTA pour les appareils mobiles constitue un véritable défi. En effet, les applications de GTA nécessitent de nombreuses saisies, interactions de l’utilisateur et recalculs, ce qui était compliqué avant l’arrivée des frameworks Javascript tels que React, Angular et Vue. Une autre difficulté concerne la gestion de ces interactions sur des écrans de taille réduite, particulièrement le smartphone. 

Et pourtant, aujourd’hui, les responsables d’équipe n’ont plus envie de devoir passer par un ordinateur fixe ou portable pour accéder aux horaires des membres de leur équipe et pour gérer les plannings de ces salariés. Ils veulent pouvoir effectuer leur travail de gestionnaire de planning en mobilité, depuis leur smartphone ou leur tablette. 


## Enoncer du projet 

3 rôles différents : 
Salarié
Responsable d’équipe
DRH

Il faut gérer 3 types de profils utilisateurs : les salariés, les responsables d’équipe et le DRH. Nous décrivons ci-dessous les fonctionnalités associées à chacun.

Accès salarié :
Sur un appareil mobile de type smartphone ou tablette, ainsi que depuis son ordinateur, le salarié doit pouvoir effectuer les opérations suivantes :
Consulter sa fiche salarié et pouvoir compléter ou mettre à jour certains champs de cette fiche : date de naissance, adresse, numéros de téléphone, adresse email	
Consulter son planning (horaires prévus ou autre « occupation » - congé, absence, etc.)
Le planning affiche, pour chaque jour et sur la période sélectionnée, les horaires de la journée (comprenant potentiellement plusieurs tranches horaires, par exemple 9h15 – 12h30, puis 13h30 – 17h30). Le cas échéant, il affiche également l’occupation du salarié (absence, congé, repos hebdomadaire, etc.).
Le salarié doit pouvoir accéder aux informations concernant ses compteurs d’heures : 
le nombre d’heures de travail de la journée
le nombre d’heures de travail de la semaine
le nombre d’heures de travail de l’année 
Attention, si un salarié n’est pas présent sur la période complète (que ce soit la semaine, le mois ou l’année), on affiche alors la date de fin de contrat et la valeur du compteur jusqu’à cette date de fin. Par exemple, le contrat d’un salarié se termine le 23/10/2018 et il ne bénéficie pas d’un nouveau contrat juste après. Alors, pour la semaine du 22/10 au 29/10, on affiche les heures effectuées le lundi 22 et le mardi 23, ainsi que la date du 23/10/2018 comme date de fin de contrat. 
Accéder à son « tableau de bord » personnel, qui reprend les informations suivantes : 
Le rappel des informations de base relatives à son contrat en cours : date de début, date de fin (le cas échéant) et nombre d’heures hebdomadaires
Son bilan d’annualisation pour le contrat en cours (voir ci-dessous pour le calcul)
Son solde de congés pour le contrat en cours 
Le tableau de bord comprendra également un filtre pour sélectionner d’éventuels autres contrats.
Demander des modifications de planning à son responsable d’équipe. Ces demandes doivent bien sûr être validées par le responsable d’équipe. Une modification peut consister à 
demander un congé payé
demander une récupération de temps de travail 
demander un aménagement d’horaire.
Imprimer un document récapitulatif de ses congés, avec les compteurs associés (acquis, pris, solde) et les dates associées.

Accès responsable d’équipe :
Sur un appareil mobile de type smartphone ou tablette, ainsi que depuis son ordinateur, le responsable d’équipe doit pouvoir effectuer les opérations suivantes. 

Ajouter un salarié et compléter sa fiche avec les informations suivantes : 
nom, prénom, date de naissance, adresse, numéros de téléphone, adresse email
contrat : date de début, date de fin, motif, nombre d’heures hebdomadaires et ETP (calculé à partir du nombre d’heures hebdomadaires, voir ci-dessous), poste occupé. 
Pouvoir consulter le planning des membres de son équipe (idéalement de manière synoptique), et avec choix des salariés et de la période à afficher (journée, semaine, mois ou année ou de date à date). 
Avoir un affichage récapitulatif des éventuels non-respects de la durée quotidienne et/ou hebdomadaire de travail sur les plannings. On retrouve sur cet affichage le salarié concerné et le jour ou la semaine. En un clic, on peut atteindre cette journée et la modifier. Des filtres sont disponibles pour réduire l’affichage en fonction d’une période choisie et/ou d’un salarié spécifique. 
Pouvoir suivre simplement les différents compteurs pour ses salariés, en pouvant filtrer les compteurs et les salariés. Les compteurs à suivre sont 
Solde d’annualisation
Solde de congés
Solde d’absence (en heures et en jours), avec le détail des motifs d’absence
Pouvoir imprimer un planning hebdomadaire de son équipe, reprenant également le compteur hebdomadaire d’heures, ainsi que le solde d’annualisation et le solde de congés
Pouvoir traiter les demandes de modifications de planning des salariés. Pour cela, il faut que le responsable de service ait un accès visuel au compteur associé. 
Pouvoir modifier le planning des salariés qu’il gère (modification d’horaires, pose d’absences ou pose de congés). 
Pouvoir établir un planning prévisionnel annuel pour chaque salarié, sur la base d’une semaine type (potentiellement spécifique à chaque salarié. Pour établir ce planning prévisionnel, on a besoin de pouvoir visualiser le planning des autres membres de l’équipe, sur chaque jour de la semaine. Etablir le planning prévisionnel revient à poser sur le planning soit des horaires de travail, soit des repos hebdomadaires (RH). 
Avoir la possibilité, en un clic, de poser sur le planning des salariés tous les jours fériés de l’année qui correspondent à un jour de semaine. 

Attention, un responsable d’équipe est aussi un salarié pour son propre planning.

Accès Directeur des Ressources Humaines (DRH)
Le DRH est l’administrateur de l’application. Sur un appareil mobile de type smartphone ou tablette, ainsi que depuis son ordinateur, le DRH doit pouvoir effectuer les opérations suivantes :

Accéder aux logs de l’application concernant les demandes de modifications de planning. Il doit pouvoir filtrer ces logs par salarié et par période (date de début et date de fin). 
Paramétrer les motifs d’absence.

Autres éléments concernant le fonctionnement de l’application
L’application doit exploiter au maximum la taille de l’écran. Ainsi, l’utilisation sur une tablette doit être plus facile que sur un smartphone à écran plus réduit. Toutefois, toutes les fonctionnalités doivent être disponibles sur smartphone. 
Une fois le planning prévisionnel établi, toute modification sur le planning doit être enregistrée (compte et opération effectuée). Pour toute modification du planning, on veut conserver les informations suivantes : 
Horaire initialement prévu (planning prévisionnel)
Horaire précédent
On veut également pouvoir facilement supprimer la dernière modification sur une journée donnée et revenir à la situation précédente. Par exemple :
Si un congé est posé sur une journée et qu’il est ensuite annulé, on retrouve automatiquement les horaires prévus sur cette journée.
Si, initialement, un salarié devait effectuer l’horaire 9h15 - 12h30 // 13h30 – 17h00 et que l’heure de fin est modifiée (elle devient 18h30), le responsable de service doit pouvoir accéder à l’horaire initial et le réappliquer si besoin. 
Les compteurs
On affiche en rouge tout compteur quotidien qui dépasse 12 heures
On affiche en rouge tout compteur hebdomadaire qui dépasse 44 heures
On souhaiterait un système de saisie et de modification des horaires facile à utiliser avec les touch screens. 

Informations complémentaires sur la gestion de plannings
Le contrat d’un salarié
Notion d’Equivalent Temps Plein (ETP) : l’ETP d’un salarié correspond à son nombre d’heures contractuel hebdomadaire divisé par 35 heures. Par exemple, un salarié effectuant contractuellement 28 heures par semaine a un ETP de 80% (2 8h/35h).

Le contenu d’un planning
Un planning peut être composé soit de tranches horaires de travail, soit d’éléments ne comportant pas d’horaires mais qui peuvent être associés à un nombre d’heures et qui vont éventuellement devoir être comptabilisés dans une série de compteurs. Nous proposons d’appeler ces éléments qui ne sont pas associés à des horaires des « occupations ». 

Règles de calcul pour les compteurs
Heures effectives : le total des heures de travail et des absences.

Solde d’annualisation : la différence entre le nombre d’heures à faire sur l’année et le nombre d’heures posées sur le planning sur l’année (donc heures réalisées + prévues). Le nombre d’heures à faire sur l’année se calcule comme suit : nombre de jours de l’année – nombre de samedi et dimanche – nombre de jours fériés hors samedi et dimanche – nombres de congés payés acquis. 
Attention : si le contrat du salarié commence et/ou se termine en cours d’année, on calcule le nombre d’heures à faire en fonction du nombre réel de jours de contrats sur l’année, du nombre réel de samedi et dimanche et du nombre de jours réels de fériés.  

Calcul de l’acquisition des congés (simplifié) : les congés sont acquis par période de 28 jours ouvrés de présence. Ils sont acquis sur la période du 1er janvier au 31 décembre et sont à prendre sur la même période. Pour chaque période complète, on acquiert 2,08 congés, à arrondir à l’entier supérieur. 

Options de l’application
Cette application doit fonctionner hors-ligne.
Système de pointage avec géolocalisation
Gestion par glisser-déposer


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
