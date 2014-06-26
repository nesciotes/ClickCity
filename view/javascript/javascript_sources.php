<?php
	Header("content-type: application/x-javascript");
	#included files
	$javascript_files = array(
		"options/Blocktypes",
		"options/Statics",
		"class/BlockClass",
		"class/BlocktypeClass",
		"class/ClockClass",
		"class/PlayerClass",
		"class/PointClass",
		"class/DimensionClass",
		"class/BuildClass",
		"class/GameClass",
		"class/Mapclass"
	);

	foreach ($javascript_files as $file){
		if(!isSet($_GET['debug'])){
			#print without whitespaces, breaks or comments
			echo preg_replace('/[ \t]+/', ' ', 
			     preg_replace('/[\r\n]+/', "", 
				 preg_replace('/\/\/(.*)\\n/', "", 
				 file_get_contents($file . ".js"))));
		} else {
			#print normal
			echo file_get_contents($file . ".js");
		}
	}
?>