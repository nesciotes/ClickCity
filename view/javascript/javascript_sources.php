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
		"class/PointClass"
	);

	foreach ($javascript_files as $file){
		if(!isSet($_GET['debug'])){
			#remove comments
			
			
			#print without whitespaces and breaks
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