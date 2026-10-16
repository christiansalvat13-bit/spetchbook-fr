// ── Traduction française de Spetchbook ──────────────────────────────
// Ajout local (non officiel). Traduit à l'affichage les textes, infobulles
// et étiquettes dessinées, sans toucher à la logique de l'application.
(function(){
var D={
// — Fenêtres —
'START NEW SCENE':'NOUVELLE SCÈNE','Save & New':'Enregistrer et nouveau','Discard & New':'Abandonner et nouveau',
'Cancel':'Annuler','Are you sure?':'Êtes-vous sûr ?','Confirm':'Confirmer','SAVE AS':'ENREGISTRER SOUS',
'Save':'Enregistrer','EXPORT AS':'EXPORTER SOUS','Export':'Exporter','STOP REC':'ARRÊT ENR.',
'Clear all strokes?':'Effacer tous les traits ?','Delete all primitives?':'Supprimer toutes les primitives ?',
// — Vue 1re personne —
'LOOK':'REGARD','⬡ SCENE':'⬡ SCÈNE','✦ FOLLOW':'✦ SUIVRE','○ NONE':'○ AUCUN','DIST':'DIST','SIZE':'TAILLE','ESC FPS':'QUITTER 1P',
'Move down':'Descendre','Move up':'Monter','Up':'Monter','Down':'Descendre',
'Trace plane':'Plan de tracé','None':'Aucun','Follow':'Suivre','Scene':'Scène',
'FPS mode · left:move · right:look':'Vue 1re personne · gauche : avancer · droite : regarder','Orbit mode':'Mode orbite',
'Exit first person':'Quitter la 1re personne','First person':'1re personne','Perspective only in FPS':'Perspective seule en 1re personne',
'Fly':'Vol','Walk':'Marche','Fly · moves where you look':'Vol · avance là où vous regardez','Walk · keeps your height':'Marche · garde votre hauteur',
'Fly: moves where you look · tap for walk':'Vol : avance là où vous regardez · toucher pour marcher',
'Walk: keeps your height · tap for fly':'Marche : garde votre hauteur · toucher pour voler',
'FPS move joystick':'Joystick de déplacement 1re personne',
'FIRST PERSON: STICKS STAY · GIZMO PILL ON LOOK STICK':'1RE PERSONNE : JOYSTICKS FIXES · MANIPULATEUR SUR LE JOYSTICK REGARD',
// — Barre du haut —
'Ruler overlay (L)':'Règle (L)','Ruler mode':'Mode de la règle',
'Symmetry: mirror strokes across plane center':'Symétrie : reflète les traits par le centre du plan','Symmetry axis':'Axe de symétrie',
'View toggles · tap for all on/off':'Affichages · toucher pour tout activer/désactiver','View options':'Options d\'affichage',
'Layers':'Calques','Pages':'Pages','Saved Views':'Vues enregistrées','File · save, load, export':'Fichier · enregistrer, ouvrir, exporter',
'New scene':'Nouvelle scène','Surface on/off':'Surface oui/non','Grid on/off':'Grille oui/non','Axis lines on/off':'Lignes d\'axes oui/non',
'Depth cues on/off':'Indices de profondeur oui/non','Cycle depth opacity':'Changer l\'opacité de profondeur','Cycle surface grid':'Changer la grille de surface',
'Delete loft surface':'Supprimer la surface loft','Toggle perspective/ortho':'Basculer perspective/ortho','Swap 2-finger gesture':'Inverser le geste à 2 doigts',
'Lock orbit: drags pan instead':'Bloquer l\'orbite : glisser déplace la vue','Move the tools to the other side':'Mettre les outils de l\'autre côté',
'Reverse lateral orbit direction':'Inverser le sens de l\'orbite latérale',
'Two-finger double-tap = undo, three-finger double-tap = redo':'Double-tape à 2 doigts = annuler, à 3 doigts = rétablir',
'Look around · 1F orbit · 2F pan/zoom, no drawing':'Regarder autour · 1 doigt : orbite · 2 doigts : déplacer/zoomer, sans dessiner',
'Stylus-only draw: finger=navigate, pen=draw':'Dessin au stylet seul : doigt = naviguer, stylet = dessiner',
'Surface':'Surface','Grid':'Grille','Axis':'Axes','Depth':'Profondeur','Delete Loft':'Suppr. le loft',
'2F=ORB':'2D=ORB','2F=PAN':'2D=DÉPL','1F=ORB':'1D=ORB','1F=PAN':'1D=DÉPL','Lock Orbit':'Bloquer l\'orbite','SIDE':'CÔTÉ','LEFT':'GAUCHE','RIGHT':'DROITE',
'INV ORB':'ORB. INV.','TAP UNDO':'TAPE ANNUL.','ON':'OUI','OFF':'NON','On':'Oui','Off':'Non',
'GRD':'GRL','DOT':'PTS','Look Around':'Regarder autour','FINGER':'DOIGT','STYLUS':'STYLET',
'BG':'FOND','UI':'INTERF.','DEF':'DÉF','DRK':'SOMB','LGT':'CLAIR','INK':'E-INK',
'Tan':'Beige','White':'Blanc','Black':'Noir','Paper':'Papier','Trace':'Calque','Custom color':'Couleur perso.','Default':'Par défaut','Custom…':'Perso…',
'Default theme':'Thème par défaut','Dark theme':'Thème sombre','Light theme':'Thème clair','E-ink theme':'Thème encre électronique',
'Hide/show top toolbar':'Masquer/afficher la barre du haut','Show top toolbar':'Afficher la barre du haut','Hide top toolbar':'Masquer la barre du haut',
// — Règle —
'TYPE':'TYPE','Straight':'Droite','180° Protractor':'Rapporteur 180°','360° Protractor':'Rapporteur 360°',
'45° Triangle':'Équerre 45°','30/60° Triangle':'Équerre 30/60°','Screen':'Écran','On Plane':'Sur le plan',
'Screen-space ruler':'Règle à l\'écran','World-space ruler (on plane)':'Règle dans l\'espace (sur le plan)',
'ROTATE SNAP':'ROTATION PAR CRANS','15° increments':'Crans de 15°','45° increments':'Crans de 45°','OFF-EDGE':'LOIN DU BORD',
'Freehand':'Main levée','Parallel':'Parallèle','Precision':'Précision',
'Strokes started away from an edge draw freely':'Les traits commencés loin d\'un bord sont libres',
'Strokes started away from an edge run parallel to the nearest edge':'Les traits commencés loin d\'un bord suivent le bord le plus proche',
'Show distance/angle during transforms':'Afficher distance/angle pendant les transformations',
'Triangle mirrored':'Équerre retournée','Triangle unmirrored':'Équerre remise à l\'endroit','Ruler size reset':'Taille de la règle réinitialisée',
// — Échelle —
'Scale Cage':'Cage d\'échelle','Scale':'Échelle','Show 3D scale cage on drawing plane':'Afficher la cage d\'échelle 3D sur le plan',
'Select scale':'Choisir l\'échelle','1 SQUARE =':'1 CARREAU =','Scale off':'Échelle désactivée','Scale cage on':'Cage d\'échelle activée','Scale cage off':'Cage d\'échelle désactivée',
// — Symétrie —
'Vertical':'Verticale','Horizontal':'Horizontale','Vertical + Horizontal':'Verticale + horizontale',
'vertical':'verticale','horizontal':'horizontale','vertical+horizontal':'verticale+horizontale','vertical + horizontal':'verticale + horizontale',
'Mirror left/right across a vertical line':'Miroir gauche/droite selon une ligne verticale',
'Mirror top/bottom across a horizontal line':'Miroir haut/bas selon une ligne horizontale',
'Mirror across both — 4-way quad symmetry':'Miroir selon les deux — symétrie en 4',
'VOLUME AXIS (cube/sphere/cylinder/cone) · toggle any combo':'AXES DU VOLUME (cube/sphère/cylindre/cône) · combinables',
'WORLD AXIS (fixed, ignores surface tilt) · toggle any combo':'AXES DU MONDE (fixes, ignorent l\'inclinaison) · combinables',
'Toggle mirroring across the surface\'s local X (needs a volume surface) — combine with Y/Z':'Miroir selon l\'axe X local de la surface (surface volume requise) — combinable avec Y/Z',
'Toggle mirroring across the surface\'s local Y (needs a volume surface) — combine with X/Z':'Miroir selon l\'axe Y local de la surface (surface volume requise) — combinable avec X/Z',
'Toggle mirroring across the surface\'s local Z (needs a volume surface) — combine with X/Y':'Miroir selon l\'axe Z local de la surface (surface volume requise) — combinable avec X/Y',
'Toggle mirroring across true world X — combine with Y/Z':'Miroir selon l\'axe X du monde — combinable avec Y/Z',
'Toggle mirroring across true world Y — combine with X/Z':'Miroir selon l\'axe Y du monde — combinable avec X/Z',
'Toggle mirroring across true world Z — combine with X/Y':'Miroir selon l\'axe Z du monde — combinable avec X/Y',
'Show Mirror Plane':'Afficher le plan miroir','Also show the mirror plane itself as a translucent red surface, not just the guide line':'Afficher aussi le plan miroir en surface rouge translucide, pas seulement la ligne guide',
'Symmetry':'Symétrie','Mirror plane':'Plan miroir','shown':'affiché','hidden':'masqué',
// — Calques —
'Sketch':'Esquisse','Notes':'Notes','Sketch 2':'Esquisse 2','Sketch 3':'Esquisse 3','Sketch 4':'Esquisse 4','Sketch 5':'Esquisse 5',
'Merged':'Fusionné','Ref':'Réf','Select':'Sélection','ACTIVE LAYER':'CALQUE ACTIF','ALL LAYERS':'TOUS LES CALQUES',
'Erase':'Gommer','Clear Active Layer':'Vider le calque actif','Clear All Strokes':'Effacer tous les traits','Clear Primitives':'Effacer les primitives',
'Merge layer to Merge layer':'Fusionner le calque dans le calque Fusionné',
'Selection reaches the active layer only · tap to change':'La sélection agit sur le calque actif seulement · toucher pour changer',
'Eraser reaches the active layer only · tap to change':'La gomme agit sur le calque actif seulement · toucher pour changer',
'Eraser reaches':'La gomme agit sur','Selection reaches':'La sélection agit sur','all layers':'tous les calques','the active layer only':'le calque actif seulement',
'tap to change':'toucher pour changer','Nothing on layer':'Rien sur le calque','Added to Merged':'Ajouté au calque Fusionné',
'Active layer · tap for layers':'Calque actif · toucher pour les calques','active layer only':'calque actif seulement',
'All layers':'Tous les calques','Active layer':'Calque actif',
'Select: all layers':'Sélection : tous les calques','Select: active layer only':'Sélection : calque actif seulement',
'Erase: all layers':'Gomme : tous les calques','Erase: active layer only':'Gomme : calque actif seulement',
'Erase on all layers':'Gommer sur tous les calques','Erase on active layer':'Gommer sur le calque actif',
'Select on all layers':'Sélectionner sur tous les calques','Select on active layer':'Sélectionner sur le calque actif',
'Erases part of a line':'Gomme une partie du trait','Erases the whole line':'Gomme le trait entier',
// — Lissage / pinceau —
'SMOOTHING':'LISSAGE','MIN':'MIN','LINE':'LIGNE','Line':'Ligne','Size':'Taille','Opacity':'Opacité','Width':'Épaisseur',
'Velocity taper':'Effilement selon la vitesse','Pressure':'Pression','Taper fades opacity':'L\'effilement estompe l\'opacité',
'Smoothing':'Lissage','Strength':'Force','Smoothing on':'Lissage activé','Raw tracking':'Tracé brut',
'Velocity taper on':'Effilement selon la vitesse activé','Uniform thickness':'Épaisseur uniforme',
'Velocity taper — faster strokes thin out':'Effilement selon la vitesse — les traits rapides s\'affinent',
'Stylus pressure — pen: width, marker: opacity':'Pression du stylet — stylo : épaisseur, marqueur : opacité',
'Smoothing — applied when you lift':'Lissage — appliqué quand vous levez le stylet',
'Stylus pressure sets opacity':'La pression règle l\'opacité','Stylus pressure sets width':'La pression règle l\'épaisseur',
'Pressure off':'Pression désactivée','opacity':'opacité','width':'épaisseur',
'Marker taper fades opacity':'L\'effilement du marqueur estompe l\'opacité','Marker taper narrows width':'L\'effilement du marqueur affine le trait',
'Colour':'Couleur','Edit colour preset':'Modifier la couleur prédéfinie',
// — Outils —
'Pen':'Stylo','Marker':'Marqueur','Eraser':'Gomme','Lasso':'Lasso','Look':'Regard','Lasso Fill':'Remplissage lasso',
'Pen (D)':'Stylo (D)','Marker (F)':'Marqueur (F)','Lasso Fill (O)':'Remplissage lasso (O)','Eraser · Full line (E)':'Gomme · trait entier (E)',
'Eraser · Partial (E)':'Gomme · partielle (E)','Select (Q)':'Sélection (Q)','Controls (hold for options)':'Commandes (maintenir pour les options)',
'Undo':'Annuler','Redo':'Rétablir','Undone':'Annulé','Redone':'Rétabli','Nothing to undo':'Rien à annuler','Nothing to redo':'Rien à rétablir',
'Partial erase':'Gomme partielle','Line erase':'Gomme trait entier','Full line':'Trait entier','Partial':'Partielle',
'Lasso Fill — not yet available':'Remplissage lasso — pas encore disponible','Draw the loop on the drawing surface':'Dessinez la boucle sur la surface de dessin',
'Loop too thin to fill':'Boucle trop fine pour être remplie',
'Stylus mode: pen draws, finger navigates':'Mode stylet : le stylet dessine, le doigt navigue','Stylus mode off':'Mode stylet désactivé',
'Pen detected: stylus mode on (finger navigates)':'Stylet détecté : mode stylet activé (le doigt navigue)',
'orbit':'orbite','pan':'déplacer',
// — Plan de dessin —
'⊥ Normal':'⊥ Normale','90° · in-plane':'90° · dans le plan','Front':'Face','Top':'Dessus','Side':'Côté',
'Lft':'Lft','Sld':'Sld','Ext':'Ext','OP':'OP','⬡Plane':'⬡Plan','⬡ Plane':'⬡ Plan','Plane':'Plan','Pln':'Pln','Cyl':'Cyl','Sph':'Sph',
'Cube':'Cube','Cylinder':'Cylindre','Sphere':'Sphère','Cone':'Cône','Loft ⟁':'Loft ⟁','Extrude ⤒':'Extruder ⤒','Rotate':'Pivoter',
'Extrude along the surface normal (tap for 90° — in-plane, sideways)':'Extruder selon la normale (toucher pour 90° — dans le plan, de côté)',
'Extruding along the surface normal (tap for 90° — in-plane, sideways)':'Extrusion selon la normale (toucher pour 90° — dans le plan, de côté)',
'Extruding 90° from normal, in-plane (tap for standing/normal)':'Extrusion à 90° de la normale, dans le plan (toucher pour la normale)',
'Align camera to face the drawing plane':'Placer la caméra face au plan de dessin','Align plane to face camera':'Placer le plan face à la caméra',
'Align view to plane':'Vue face au plan','Align plane to view':'Plan face à la vue','Plane reset':'Plan réinitialisé',
'No drawing surface':'Aucune surface de dessin','Select something first':'Sélectionnez d\'abord quelque chose',
'Plane fitted to selection':'Plan ajusté à la sélection','Plane moved to selection':'Plan déplacé sur la sélection','Plane to selection':'Plan sur la sélection',
'No active plane · drawing disabled':'Aucun plan actif · dessin désactivé',
'Snap':'Magnétisme','Snap on':'Magnétisme activé','Snap off':'Magnétisme désactivé','Reset':'Réinitialiser',
'Swap nav ↔ gizmo':'Inverser nav ↔ manipulateur','Swap':'Inverser',
'Toggle 3D local gizmo overlay':'Afficher le manipulateur 3D local','World axes — tap for local':'Axes du monde — toucher pour les axes locaux',
'Local axes — tap for world':'Axes locaux — toucher pour les axes du monde',
'Tap: toggle 3D local gizmo. Hold: show it temporarily — interact with a second finger/pencil, release to return to the card.':'Toucher : afficher le manipulateur 3D local. Maintenir : l\'afficher temporairement — agir avec un 2e doigt/stylet, relâcher pour revenir.',
'LCL on':'LCL activé','LCL off':'LCL désactivé',
// — Loft / extrusion —
'No loft — select 2+ strokes → ⟁ Loft':'Pas de loft — sélectionnez 2 traits ou + → ⟁ Loft',
'Loft cleared · select strokes to build new loft':'Loft effacé · sélectionnez des traits pour un nouveau loft',
'Select 2+ lines to loft':'Sélectionnez 2 lignes ou + pour le loft','Stroke too short to loft':'Trait trop court pour le loft',
'Loft built · draw on it · cycle Lft again to clear':'Loft créé · dessinez dessus · retouchez Lft pour l\'effacer',
'No extrusion — select 1 stroke → Ext':'Pas d\'extrusion — sélectionnez 1 trait → Ext',
'Extrusion cleared · select a stroke to build a new one':'Extrusion effacée · sélectionnez un trait pour en créer une',
'Select exactly 1 line to extrude':'Sélectionnez exactement 1 ligne à extruder','Stroke too short to extrude':'Trait trop court pour l\'extrusion',
'Extrusion built · adjust size/direction · cycle Ext again to clear':'Extrusion créée · réglez taille/direction · retouchez Ext pour l\'effacer',
'Select 2+ strokes · then tap ⟁ Loft':'Sélectionnez 2 traits ou + · puis touchez ⟁ Loft','Select 1 stroke · then tap Ext':'Sélectionnez 1 trait · puis touchez Ext',
'Loft deleted':'Loft supprimé','Select 2+ strokes for loft solid':'Sélectionnez 2 traits ou + pour un solide loft',
'Stroke too short for loft solid':'Trait trop court pour un solide loft','Loft solid added to Ref layer':'Solide loft ajouté au calque Réf',
'Loft a temporary drawing plane through selected strokes (2+)':'Créer un plan de dessin temporaire (loft) à travers les traits sélectionnés (2+)',
'Loft selected strokes as a ref solid (2+)':'Créer un solide de réf. (loft) à partir des traits sélectionnés (2+)',
'Loft':'Loft','Loft solid':'Solide loft','Extrude':'Extruder','~ Solid':'~ Solide','⟁ Loft':'⟁ Loft',
// — Sélection / transformation —
'NAV':'NAV','⊕ LCL':'⊕ LCL','All':'Tout','Move':'Déplacer','Rot':'Rot','Dup':'Dup','Del':'Suppr','Mv':'Dép','Sc':'Éch','+ADD':'+AJOUT',
'Duplicated':'Dupliqué','Deleted':'Supprimé','Nothing selected':'Rien de sélectionné','Delete':'Supprimer','Duplicate':'Dupliquer',
'Delete selected':'Supprimer la sélection','Duplicate the selected strokes':'Dupliquer les traits sélectionnés','Delete the selected strokes':'Supprimer les traits sélectionnés',
'Duplicate selection':'Dupliquer la sélection','Delete selection':'Supprimer la sélection','Duplicate (Ctrl+D)':'Dupliquer (Ctrl+D)',
'Deselect all — tap again with nothing selected to leave Select mode':'Tout désélectionner — retoucher sans sélection pour quitter le mode Sélection',
'Deselect (Esc)':'Désélectionner (Échap)','Deselect':'Désélectionner','Leave Select':'Quitter la sélection',
'Multi-select is always on':'La multi-sélection est toujours active','Merge':'Fusionner','Done':'Terminé','Style':'Style',
'drag to transform selected stroke':'glisser pour transformer le trait sélectionné','drag to transform ref object':'glisser pour transformer l\'objet de réf.',
'drag to transform':'glisser pour transformer','drag arcs / arrows / boxes to transform':'glisser arcs / flèches / carrés pour transformer',
'drag arrows to move':'glisser les flèches pour déplacer','drag arcs to rotate':'glisser les arcs pour pivoter','drag boxes to scale':'glisser les carrés pour redimensionner',
'drag ↕ uniform scale':'glisser ↕ redimensionnement uniforme','uniform scale':'redimensionnement uniforme','Uniform scale':'Redimensionnement uniforme',
'Show all transform handles (move + rotate + scale)':'Afficher toutes les poignées (déplacer + pivoter + redimensionner)',
'Show all transform handles':'Afficher toutes les poignées','Drag to scale':'Glisser pour redimensionner','move · rotate · scale':'déplacer · pivoter · redimensionner',
'Apply exact value':'Appliquer la valeur exacte','SELECTS':'SÉLECTIONNE','Strokes':'Traits','Ref objects':'Objets de réf.',
'Selects everything':'Sélectionne tout','Selects strokes only':'Sélectionne seulement les traits','Selects ref objects only':'Sélectionne seulement les objets de réf.',
'SNAP STEPS':'CRANS DU MAGNÉTISME','(SNAP OFF)':'(MAGNÉTISME DÉSACTIVÉ)','Angle':'Angle','ref object':'objet de réf.',
'use tool cards for color/size/op':'utilisez les cartes d\'outils pour couleur/taille/opacité',
// — Objets de référence —
'Ref objects':'Objets de réf.','Add box':'Ajouter un cube','Add sphere':'Ajouter une sphère','Add cylinder':'Ajouter un cylindre','Add cone':'Ajouter un cône','Add plane':'Ajouter un plan',
'Objects list':'Liste des objets','Merge ref objects':'Fusionner les objets de réf.','Tap scene to select ref object':'Touchez la scène pour sélectionner un objet de réf.',
'Draw on primitive — use selected ref as drawing plane':'Dessiner sur la primitive — utiliser l\'objet sélectionné comme plan de dessin',
'Show/hide all ref objects':'Afficher/masquer tous les objets de réf.','Use as drawing plane':'Utiliser comme plan de dessin','Ref object':'Objet de réf.',
'No objects yet — add one first':'Pas encore d\'objet — ajoutez-en un d\'abord','Tap a ref object in scene':'Touchez un objet de réf. dans la scène',
'Add 2+ ref objects to merge':'Ajoutez 2 objets de réf. ou + pour fusionner','Select at least 2 objects':'Sélectionnez au moins 2 objets',
'Add a ref object first':'Ajoutez d\'abord un objet de réf.','consider merging for performance':'pensez à les fusionner pour la fluidité',
'Box':'Cube','Primitive':'Primitive',
// — Navigation —
'Reset view':'Réinitialiser la vue','View reset':'Vue réinitialisée','Zoom — tap a side for one step, hold and slide for continuous':'Zoom — toucher un côté pour un cran, maintenir et glisser en continu',
'Drag to orbit · tap face to snap · double-tap for ortho':'Glisser pour tourner · toucher une face pour s\'y aligner · double-tape pour ortho',
'Pan joystick — drag to pan':'Joystick de déplacement — glisser pour déplacer la vue',
'Hide/show control card':'Masquer/afficher la carte de commandes','Switch columns to the other side':'Passer les colonnes de l\'autre côté',
'Frame All':'Tout cadrer','Frame Selected':'Cadrer la sélection','More':'Plus','Back':'Retour','Trace plane: Scene':'Plan de tracé : Scène',
'Perspective':'Perspective','Ortho':'Ortho','Orthographic — tap for perspective':'Orthographique — toucher pour la perspective',
'Perspective — tap for orthographic':'Perspective — toucher pour l\'orthographique',
'Orbit locked — drags pan':'Orbite bloquée — glisser déplace la vue','Orbit unlocked':'Orbite débloquée','Orbit locked':'Orbite bloquée',
'Orbit direction reversed':'Sens de l\'orbite inversé','Orbit direction normal':'Sens de l\'orbite normal',
'2F tap = undo · 3F tap = redo':'Tape 2 doigts = annuler · 3 doigts = rétablir','Tap undo/redo off':'Annuler/rétablir par tape désactivé',
'View off':'Affichages désactivés','View on':'Affichages activés','Depth on':'Profondeur activée','Depth off':'Profondeur désactivée',
'1F Look':'1D Regard','1F Pan':'1D Déplacer','1F Orbit':'1D Orbite','tap to swap':'toucher pour inverser','tap to move them':'toucher pour les déplacer',
'Gizmo and NavCube':'Manipulateur et cube de nav.','NavCube only':'Cube de nav. seul','Gizmo only':'Manipulateur seul','Controls hidden':'Commandes masquées',
'Hide both':'Masquer les deux','Hide controls':'Masquer les commandes','Show controls':'Afficher les commandes',
'Large':'Grand','Medium':'Moyen','Small':'Petit','LANDSCAPE PHONE: STACKED, SMALL':'TÉLÉPHONE PAYSAGE : EMPILÉ, PETIT',
'RGT':'DRT','LFT':'GCH','BCK':'ARR','FRT':'AV','TOP':'HAUT','BTM':'BAS',
'DRAW':'DESSIN','ERASE · click/drag to remove':'GOMME · cliquer/glisser pour effacer','ORBIT · drag to rotate · press R or D to exit':'ORBITE · glisser pour tourner · R ou D pour sortir',
'PAN · drag to pan · press G or D to exit':'DÉPLACER · glisser pour déplacer · G ou D pour sortir','SELECT · tap a stroke':'SÉLECTION · touchez un trait','ERASE · drag to split':'GOMME · glisser pour couper',
// — Pages / carnet —
'TAP PAGE TO OPEN · HOLD A THUMBNAIL TO EDIT':'TOUCHER UNE PAGE POUR L\'OUVRIR · MAINTENIR UNE MINIATURE POUR LA MODIFIER',
'Need at least 1 page':'Il faut au moins 1 page','Page deleted':'Page supprimée','Tap to reorder · tap away to exit':'Toucher pour réordonner · toucher ailleurs pour sortir',
'Previous page':'Page précédente','Next page':'Page suivante','New page':'Nouvelle page','Fit page':'Ajuster la page','Close':'Fermer',
'Tap to rename':'Toucher pour renommer','Edit notes':'Modifier les notes','Live 3D view of this page':'Vue 3D en direct de cette page',
'Live 3D on — tap for the snapshot again':'3D en direct activée — toucher pour revenir à l\'instantané','Open this page in live 3D':'Ouvrir cette page en 3D en direct',
'Live 3D is unavailable mid-turn':'3D en direct indisponible pendant une rotation',
'Live 3D — drag to orbit, two fingers to dolly and pan':'3D en direct — glisser pour tourner, deux doigts pour avancer et déplacer',
'Reference reframed':'Référence recadrée','FREEZE':'FIGER','Freeze this angle into a snapshot you can draw on':'Figer cet angle en instantané sur lequel dessiner',
'Note colour — tap to change':'Couleur de la note — toucher pour changer','Note colour (following the global) — tap to change':'Couleur de la note (couleur générale) — toucher pour changer',
'On every page — tap to pin here':'Sur toutes les pages — toucher pour l\'épingler ici','Pinned — tap to free':'Épinglée — toucher pour libérer',
'Follows every page':'Suit toutes les pages','Note deleted — undo in the palette':'Note supprimée — annuler dans la palette',
'drag it to orbit':'glissez pour tourner','Dense view — snapshot simplified':'Vue dense — instantané simplifié','Nothing in view to snapshot':'Rien à capturer dans la vue',
'draw over it':'dessinez par-dessus','Frozen — draw over it':'Figé — dessinez par-dessus','Frozen (nothing was in view)':'Figé (rien n\'était visible)',
'Page':'Page','Select a note first':'Sélectionnez d\'abord une note','Note':'Note',
'Notes: draw, drag, resize — arrows below to turn':'Notes : dessiner, glisser, redimensionner — flèches dessous pour tourner',
'Notes locked':'Notes verrouillées','Notes: edit on':'Notes : modification activée','Desk colour':'Couleur du bureau','New note':'Nouvelle note',
'Reference view of this page':'Vue de référence de cette page','Snapshot of the current 3D view — draw on it':'Instantané de la vue 3D actuelle — dessinez dessus',
'New notes: every page / this page':'Nouvelles notes : toutes les pages / cette page','Undo (notes)':'Annuler (notes)','Redo (notes)':'Rétablir (notes)',
'Eraser — tap a stroke to remove it':'Gomme — touchez un trait pour l\'effacer','Lasso — draw a filled shape':'Lasso — dessinez une forme pleine',
'Select — tap strokes, drag to move':'Sélection — touchez des traits, glissez pour déplacer','Custom ink colour':'Couleur d\'encre perso.','Custom pen size':'Taille de stylo perso.',
'Partial erase — only what is under the eraser':'Gomme partielle — seulement ce qui est sous la gomme',
'Dark desk':'Bureau sombre','White desk':'Bureau blanc','Same as the 3D scene':'Comme la scène 3D','Pick a colour':'Choisir une couleur','Presets':'Préréglages',
'Frame page':'Cadrer la page','Frame selected notes':'Cadrer les notes sélectionnées','Frame all':'Tout cadrer',
// — Fichier / export —
'Load':'Ouvrir','Scene JSON':'Scène (JSON)','Screenshot (PNG)':'Capture d\'écran (PNG)','Vector (SVG)':'Vectoriel (SVG)',
'Record Views (video)':'Enregistrer les vues (vidéo)','Record views to video':'Enregistrer les vues en vidéo','Save view':'Enregistrer la vue',
'Lines for Blender Grease Pencil — import with the Spetchspace add-on':'Lignes pour Grease Pencil de Blender — à importer avec l\'extension Spetchspace',
'View saved':'Vue enregistrée','Nothing to export':'Rien à exporter','PNG saved':'PNG enregistré','No visible strokes to export':'Aucun trait visible à exporter',
'SVG exported':'SVG exporté','Saved':'Enregistré','Loaded':'Ouvert','Invalid file':'Fichier invalide','GLB exported':'GLB exporté',
'USDA exported':'USDA exporté','USDZ exported':'USDZ exporté','Grease Pencil export failed':'Échec de l\'export Grease Pencil',
'This page is empty — nothing to export':'Cette page est vide — rien à exporter','Need 2+ saved views to record':'Il faut 2 vues enregistrées ou + pour filmer',
'Recording not supported on this device':'Enregistrement vidéo non pris en charge sur cet appareil','Recording cancelled':'Enregistrement annulé',
'No recording data':'Aucune donnée enregistrée','Recording saved':'Vidéo enregistrée','Recording error':'Erreur d\'enregistrement','Recording started':'Enregistrement lancé',
'Recording failed':'Échec de l\'enregistrement',
'Graphics reset — reconnecting…':'Réinitialisation graphique — reconnexion…','Graphics still unstable — close and reopen the app':'Graphismes toujours instables — fermez et rouvrez l\'application',
'Three.js failed to load. Put three.min.js next to index.html, or connect to a network.':'Three.js n\'a pas pu se charger. Placez three.min.js à côté d\'index.html, ou connectez-vous à Internet.',
// — Préfixes pour textes composés « X : valeur » —
'Mode':'Mode','Stylus mode':'Mode stylet','Face':'Face','View':'Vue','Erase on':'Gommer sur','Select on':'Sélectionner sur',
'Pressure on':'Pression activée'
};
// Valeurs de type de surface (en minuscules, issues du code)
var SURF={plane:'plan',cube:'cube',cylinder:'cylindre',sphere:'sphère',cone:'cône',loft:'loft',extrude:'extrusion',none:'aucune'};
var P=[
 [/^● (.+)$/,function(m){return '● '+tr1(m[1]);}],
 [/^Deleted (\d+) strokes?$/,function(m){return m[1]+(m[1]==='1'?' trait supprimé':' traits supprimés');}],
 [/^(\d+) strokes?$/,function(m){return m[1]+(m[1]==='1'?' trait':' traits');}],
 [/^(\d+) selected$/,function(m){return m[1]+(m[1]==='1'||m[1]==='0'?' sélectionné':' sélectionnés');}],
 [/^(\d+) lines$/,function(m){return m[1]+' lignes';}],
 [/^Merged to layer (.+)$/,function(m){return 'Fusionné dans le calque '+m[1];}],
 [/^Merged (\d+) objects$/,function(m){return m[1]+' objets fusionnés';}],
 [/^Merge (\d+) ref objects into one\? This cannot be undone\.$/,function(m){return 'Fusionner '+m[1]+' objets de réf. en un seul ? C\'est irréversible.';}],
 [/^Clear strokes on layer (.+)\?$/,function(m){return 'Effacer les traits du calque '+m[1]+' ?';}],
 [/^([12])-finger = (orbit|pan)$/,function(m){return m[1]+(m[1]==='1'?' doigt = ':' doigts = ')+D[m[2]];}],
 [/^([12])-finger (orbit|pan)$/,function(m){return m[1]+(m[1]==='1'?' doigt : ':' doigts : ')+D[m[2]];}],
 [/^Page limit reached \((\d+)\)$/,function(m){return 'Limite de pages atteinte ('+m[1]+')';}],
 [/^Pinned to page (\d+)$/,function(m){return 'Épinglée à la page '+m[1];}],
 [/^Reference to page (\d+)$/,function(m){return 'Référence vers la page '+m[1];}],
 [/^Snapshot of page (\d+)$/,function(m){return 'Instantané de la page '+m[1];}],
 [/^(\d+)\+ ref objects$/,function(m){return m[1]+' objets de réf. ou +';}],
 [/^1 sq = (.+)$/,function(m){return '1 carreau = '+m[1];}],
 [/^OBJ exported \((.+)\)$/,function(m){return 'OBJ exporté ('+tr1(m[1])+')';}],
 [/^Grease Pencil exported$/,function(){return 'Grease Pencil exporté';}],
 [/^not available for (.+)$/,function(m){return 'indisponible pour '+(SURF[m[1]]||m[1]);}],
 [/^(Plane|Grid) (\S+)$/,function(m){return D[m[1]]+' '+tr1(m[2]);}],
 [/^(.+) \((world|volume)\)$/,function(m){return m[1]+(m[2]==='world'?' (monde)':' (volume)');}],
 [/^ON \((.+)\)$/,function(m){return 'OUI ('+tr1(m[1])+')';}],
 [/^(Eraser reaches|Selection reaches|Select on|Erase on) (all layers|the active layer only|active layer only)$/,function(m){return D[m[1]]+' '+D[m[2]];}],
 [/^drag →(move|rotate|scale) ([XYZ])$/,function(m){return 'glisser → '+({move:'déplacer',rotate:'pivoter',scale:'redimensionner'})[m[1]]+' '+m[2];}],
 [/^(Ink|Pen|Colour|Size|Opacity) (#[0-9a-fA-F]+|[\d.]+%?)$/,function(m){return ({Ink:'Encre',Pen:'Stylo',Colour:'Couleur',Size:'Taille',Opacity:'Opacité'})[m[1]]+' '+m[2];}],
 [/^(Angle|Move|Scale) step (.+)$/,function(m){return 'Cran '+({Angle:'d\'angle',Move:'de déplacement',Scale:'d\'échelle'})[m[1]]+' '+m[2];}],
 [/^Tools on the (left|right)$/,function(m){return 'Outils à '+(m[1]==='left'?'gauche':'droite');}],
 [/^(.+) \(hold for options\)$/,function(m){return tr1(m[1])+' (maintenir pour les options)';}],
 [/^SNAP STEPS \(SNAP OFF\)$/,function(){return 'CRANS DU MAGNÉTISME (MAGNÉTISME DÉSACTIVÉ)';}]
];
var SEPS=[' · ',' — ','  '];
var cache=new Map();
function tr1(c){
  if(Object.prototype.hasOwnProperty.call(D,c))return D[c];
  for(var i=0;i<P.length;i++){var m=c.match(P[i][0]);if(m)return P[i][1](m);}
  for(var s=0;s<SEPS.length;s++){
    if(c.indexOf(SEPS[s])>0){
      var parts=c.split(SEPS[s]),ch=false;
      for(var k=0;k<parts.length;k++){var t=tr1(parts[k]);if(t!==parts[k]){parts[k]=t;ch=true;}}
      if(ch)return parts.join(SEPS[s]);
    }
  }
  var cm=c.match(/^([^:]{1,30}): (.+)$/);
  if(cm&&Object.prototype.hasOwnProperty.call(D,cm[1]))return D[cm[1]]+' : '+tr1(cm[2]);
  return c;
}
function tr(s){
  if(typeof s!=='string'||!/[A-Za-z]{2}/.test(s))return s;
  var r=cache.get(s);if(r!==undefined)return r;
  var m=s.match(/^(\s*)([\s\S]*?)(\s*)$/);
  r=m[1]+tr1(m[2])+m[3];
  if(cache.size<5000)cache.set(s,r);
  return r;
}
window._frTr=tr;
var ATTRS=['title','placeholder','aria-label'];
function doText(n){var p=n.parentNode;if(!p||p.nodeName==='SCRIPT'||p.nodeName==='STYLE'||p.nodeName==='TEXTAREA')return;
  var v=n.nodeValue,t=tr(v);if(t!==v)n.nodeValue=t;}
function doAttr(el,a){var v=el.getAttribute(a);if(v){var t=tr(v);if(t!==v)el.setAttribute(a,t);}}
function walk(root){
  if(root.nodeType===3){doText(root);return;}
  if(root.nodeType!==1)return;
  if(root.nodeName==='SCRIPT'||root.nodeName==='STYLE')return;
  for(var i=0;i<ATTRS.length;i++)if(root.hasAttribute(ATTRS[i]))doAttr(root,ATTRS[i]);
  var w=document.createTreeWalker(root,5,null),n;
  while((n=w.nextNode())){
    if(n.nodeType===3)doText(n);
    else for(var j=0;j<ATTRS.length;j++)if(n.hasAttribute(ATTRS[j]))doAttr(n,ATTRS[j]);
  }
}
document.documentElement.lang='fr';
walk(document.body);
new MutationObserver(function(ms){
  for(var i=0;i<ms.length;i++){var m=ms[i];
    if(m.type==='characterData')doText(m.target);
    else if(m.type==='attributes')doAttr(m.target,m.attributeName);
    else for(var k=0;k<m.addedNodes.length;k++)walk(m.addedNodes[k]);
  }
}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
// Textes dessinés sur les canevas (cube de navigation, étiquettes)
var C2=window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype;
if(C2&&C2.fillText){var ft=C2.fillText;C2.fillText=function(t){if(typeof t==='string'){var a=Array.prototype.slice.call(arguments);a[0]=tr(t);return ft.apply(this,a);}return ft.apply(this,arguments);};}
})();
