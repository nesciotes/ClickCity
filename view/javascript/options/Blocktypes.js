var BlockTypes = {
	Grass : new Blocktype({
		top : [ {
			texture : "grass.png" // chance ?? er zijn nog 3 top texutres
		} ],
		side : [ {
			texture : "dirt.png"
		} ],
		overlay : [ {
			texture : "Flowers_1.png",
			chance : 1
		}, {
			texture : "Flowers_2.png",
			chance : 1
		}, {
			texture : "Flowers_3.png",
			chance : 1
		}, ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true, 0.04),

	Sand : new Blocktype({
		top : [ {
			texture : "Sand1.png"
		} ],
		side : [ {
			texture : "Sand1.png"
		} ],
		overlay : [ {
			texture : "Sand2.png",
			chance : 200
		}, {
			texture : "Shell_1.png",
			chance : 6
		}, {
			texture : "Crab_1.png",
			chance : 1
		}, ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true, 0.2),

	Snow : new Blocktype({
		top : [ {
			texture : "Snow1.png"
		} ],
		side : [ {
			texture : "Snow1.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Stone : new Blocktype({
		top : [ {
			texture : "Stone1.png"
		} ],
		side : [ {
			texture : "Stone1.png"
		} ],
		overlay : [ {
			texture : "Stone3.png",
			chance : 1
		}, ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true, 0.01),

	Water : new Blocktype({
		top : [ {
			texture : "Water1.png"
		} ],
		side : [ {
			texture : "Water1.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildbricks_1 : new Blocktype({
		top : [ {
			texture : "Buildbricks_1a.png"
		} ],
		side : [ {
			texture : "Buildbricks_1a.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildbricks_2 : new Blocktype({
		top : [ {
			texture : "Buildbricks_2a.png"
		} ],
		side : [ {
			texture : "Buildbricks_2a.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildbricks_3 : new Blocktype({
		top : [ {
			texture : "Buildbricks_3.png"
		} ],
		side : [ {
			texture : "Buildbricks_3.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildbricks_4 : new Blocktype({
		top : [ {
			texture : "Buildbricks_4.png"
		} ],
		side : [ {
			texture : "Buildbricks_4.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildmodern_1 : new Blocktype({
		top : [ {
			texture : "Buildingmodern_2.png"
		} ],
		side : [ {
			texture : "Buildingmodern_1.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildmodern_2 : new Blocktype({
		top : [ {
			texture : "Buildingmodern_2.png"
		} ],
		side : [ {
			texture : "Buildingmodern_2.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildmodern_3 : new Blocktype({
		top : [ {
			texture : "Buildingmodern_2.png"
		} ],
		side : [ {
			texture : "Buildingmodern_2b.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildmodern_4 : new Blocktype({
		top : [ {
			texture : "Buildingmodern_2.png"
		} ],
		side : [ {
			texture : "Buildingmodern_3.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildmodern_5 : new Blocktype({
		top : [ {
			texture : "Buildingmodern_3.png"
		} ],
		side : [ {
			texture : "Buildingmodern_2b.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Buildbricks_5 : new Blocktype({
		top : [ {
			texture : "Missing.png"
		} ],
		side : [ {
			texture : "Oldstone1.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true),

	Wood : new Blocktype({
		top : [ {
			texture : "Missing.png"
		} ],
		side : [ {
			texture : "Wood1.png"
		} ]
	}, {
		width : 1,
		height : 1,
		lengt : 1
	}, true)
};