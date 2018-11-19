'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
    'treeControl'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).

controller("main", ['$scope','$window', function($scope,$window) {

    $scope.treeOptions = {
        nodeChildren: "children",
        dirSelectable: true,
        injectClasses: {
            ul: "a1",
            li: "a2",
            liSelected: "a7",
            iExpanded: "a3",
            iCollapsed: "a4",
            iLeaf: "a5",
            label: "a6",
            labelSelected: "a8"
        }
    };
    $scope.showSelected = function(sel) {
        $scope.selectedNode = sel.title;
        $window.location = "#!/view1?id="+sel.id;
    };
    $scope.dataForTheTree =
        [
            {
                "id": "toc",
                "title": "Molecular Conceptor - Table of Contents",
                "children": [
                    {
                        "id": "RationalDrugDesign",
                        "title": "Drug Discovery",
                        "children": [
                            {
                                "id": "dd",
                                "title": "Introduction to Drug Discovery",
                                "dateCreated": "110701",
                                "isFinal": "T"
                            },
                            {
                                "id": "drugdesignintro",
                                "title": "Principles of Rational Drug Design",
                                "dateCreated": "020801",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "v1_c1_1",
                                        "title": "Rational Drug Design",
                                        "children": [
                                            {
                                                "id": "v1_c1_1_1",
                                                "title": "Drug Design Basis: Molecular Recognition"
                                            },
                                            {
                                                "id": "v1_c1_1_2",
                                                "title": "Lock-and-Key Model"
                                            },
                                            {
                                                "id": "v1_c1_1_2_2_",
                                                "title": "Induced-Fit Model"
                                            },
                                            {
                                                "id": "v1_c1_1_3",
                                                "title": "Rational Drug Design"
                                            },
                                            {
                                                "id": "v1_c1_1_4",
                                                "title": "Rational Drug Design Process"
                                            },
                                            {
                                                "id": "v1_c1_1_5",
                                                "title": "Receptor-Based Drug Design"
                                            },
                                            {
                                                "id": "v1_c1_1_6",
                                                "title": "Pharmacophore-Based Drug Design"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c1_2",
                                        "title": "Pharmacophore-Based Design",
                                        "children": [
                                            {
                                                "id": "v1_c1_2_1",
                                                "title": "Pharmacophore-Based Drug Design Approach"
                                            },
                                            {
                                                "id": "v1_c1_2_2",
                                                "title": "Similarity Concepts and Molecular Mimicry"
                                            },
                                            {
                                                "id": "v1_c1_2_3",
                                                "title": "Examples of Molecular Mimicry",
                                                "children": [
                                                    {
                                                        "id": "v1_c1_2_3_2",
                                                        "title": "ATP"
                                                    },
                                                    {
                                                        "id": "v1_c1_2_3_3",
                                                        "title": "Dopamine"
                                                    },
                                                    {
                                                        "id": "v1_c1_2_3_4",
                                                        "title": "Histamine"
                                                    },
                                                    {
                                                        "id": "v1_c1_2_3_5",
                                                        "title": "Estradiol"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c1_2_4",
                                                "title": "Peptidomimetics"
                                            },
                                            {
                                                "id": "v1_c1_2_5",
                                                "title": "Strengths of Pharmacophore-Based Drug Design"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c1_3",
                                        "title": "Receptor-Based Design",
                                        "children": [
                                            {
                                                "id": "v1_c1_3_1",
                                                "title": "Design by Direct Interaction with Receptor Sites"
                                            },
                                            {
                                                "id": "v1_c1_3_2",
                                                "title": "Exploiting the Receptor Recognition Concepts"
                                            },
                                            {
                                                "id": "v1_c1_3_3",
                                                "title": "Initial Data in Receptor-Based Drug Design"
                                            },
                                            {
                                                "id": "v1_c1_3_4",
                                                "title": "Strengths of Receptor Based Drug Design"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c1_4",
                                        "title": "Integration in a Global Perspective",
                                        "children": [
                                            {
                                                "id": "v1_c1_4_1",
                                                "title": "Typical Projects"
                                            },
                                            {
                                                "id": "v1_c1_4_2",
                                                "title": "Exploit the Two Methods, Independently"
                                            },
                                            {
                                                "id": "v1_c1_4_3_s1",
                                                "title": "Synergy Between the Two Approaches"
                                            },
                                            {
                                                "id": "v1_c1_4_3_s2",
                                                "title": "Example of Synergy Between the Two Approaches"
                                            },
                                            {
                                                "id": "v1_c1_4_4",
                                                "title": "Good Binding Models, the Synergy Condition",
                                                "children": [
                                                    {
                                                        "id": "v1_c1_4_4_2",
                                                        "title": "Ideal Situation"
                                                    },
                                                    {
                                                        "id": "v1_c1_4_4_3",
                                                        "title": "Example 1"
                                                    },
                                                    {
                                                        "id": "v1_c1_4_4_4",
                                                        "title": "Example 2"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c1_4_5",
                                                "title": "Integration in a Global Perspective",
                                                "children": [
                                                    {
                                                        "id": "v1_c1_4_5_2",
                                                        "title": "Pharmacophore-Based Drug Design"
                                                    },
                                                    {
                                                        "id": "v1_c1_4_5_3",
                                                        "title": "Receptor-Based Drug Design"
                                                    },
                                                    {
                                                        "id": "v1_c1_4_5_4",
                                                        "title": "Integrated Global Approach"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c1_5",
                                        "title": "Challenge of the Genomics Era",
                                        "children": [
                                            {
                                                "id": "v1_c1_5_1",
                                                "title": "The Genomic Era"
                                            },
                                            {
                                                "id": "v1_c1_5_2",
                                                "title": "A New Challenge in Drug Design"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c1_6",
                                        "title": "Typical Projects",
                                        "children": [
                                            {
                                                "id": "v1_c1_6_1_s1",
                                                "title": "Typical Pharmacophore-Based Project"
                                            },
                                            {
                                                "id": "v1_c1_6_1_s2",
                                                "title": "Design Based on 3D Mimicry"
                                            },
                                            {
                                                "id": "v1_c1_6_2_s1",
                                                "title": "Typical Receptor-Based Project"
                                            },
                                            {
                                                "id": "v1_c1_6_2_s2",
                                                "title": "Design Based in Making Favorable 3D Interactions"
                                            },
                                            {
                                                "id": "v1_c1_6_3",
                                                "title": "Typical Genomic Project"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c1_7",
                                        "title": "Perspectives",
                                        "children": [
                                            {
                                                "id": "v1_c1_7_1_s1",
                                                "title": "Drug Discovery of the 1970's "
                                            },
                                            {
                                                "id": "v1_c1_7_1_s2",
                                                "title": "Drug Discovery of the 1980's"
                                            },
                                            {
                                                "id": "v1_c1_7_1_s3",
                                                "title": "Drug Discovery of the 1990's"
                                            },
                                            {
                                                "id": "v1_c1_7_1_s4",
                                                "title": "The Present Situation"
                                            },
                                            {
                                                "id": "v1_c1_7_2",
                                                "title": "Initial Skepticism Towards Rational Drug Design"
                                            },
                                            {
                                                "id": "v1_c1_7_3",
                                                "title": "Success Stories in Rational Drug Design"
                                            },
                                            {
                                                "id": "v1_c1_7_4",
                                                "title": "Future Perspectives"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "me_quiz4trte",
                                        "title": "CHAPTER QUIZZES",
                                        "children": [
                                            {
                                                "id": "ra_quiz1",
                                                "title": "Quiz 1"
                                            },
                                            {
                                                "id": "ra_quiz2",
                                                "title": "Quiz 2"
                                            },
                                            {
                                                "id": "ra_quiz3",
                                                "title": "Quiz 3"
                                            },
                                            {
                                                "id": "ra_quiz4",
                                                "title": "Quiz 4"
                                            },
                                            {
                                                "id": "ra_quiz5",
                                                "title": "Quiz 5"
                                            },
                                            {
                                                "id": "ra_quiz6",
                                                "title": "Quiz 6"
                                            },
                                            {
                                                "id": "ra_quiz7",
                                                "title": "Quiz 7"
                                            },
                                            {
                                                "id": "ra_quiz8",
                                                "title": "Quiz 8"
                                            },
                                            {
                                                "id": "ra_quiz9",
                                                "title": "Quiz 9"
                                            },
                                            {
                                                "id": "ra_quiz10",
                                                "title": "Quiz 10"
                                            },
                                            {
                                                "id": "ra_quiz11",
                                                "title": "Quiz 11"
                                            },
                                            {
                                                "id": "ra_quiz12",
                                                "title": "Quiz 12"
                                            },
                                            {
                                                "id": "ra_quiz13",
                                                "title": "Quiz 13"
                                            },
                                            {
                                                "id": "ra_quiz14",
                                                "title": "Quiz 14"
                                            },
                                            {
                                                "id": "ra_quiz15",
                                                "title": "Quiz 15"
                                            },
                                            {
                                                "id": "v1_c1_quiz1",
                                                "title": "Quiz 16"
                                            },
                                            {
                                                "id": "v1_c1_quiz2",
                                                "title": "Quiz 17"
                                            },
                                            {
                                                "id": "v1_c1_quiz3",
                                                "title": "Quiz 18"
                                            },
                                            {
                                                "id": "v1_c1_quiz4",
                                                "title": "Quiz 19"
                                            },
                                            {
                                                "id": "v1_c1_quiz5",
                                                "title": "Quiz 20"
                                            },
                                            {
                                                "id": "v1_c1_quiz8",
                                                "title": "Quiz 21"
                                            },
                                            {
                                                "id": "v1_c1_quiz10",
                                                "title": "Quiz 22"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "sar",
                                "title": "Structure Activity Relationships",
                                "dateCreated": "050520",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "sar_1",
                                        "title": "Introduction",
                                        "children": [
                                            {
                                                "id": "sar_2",
                                                "title": "Structure Activity Relationships (SAR)"
                                            },
                                            {
                                                "id": "sar_3",
                                                "title": "Aim of SAR Analyses"
                                            },
                                            {
                                                "id": "sar_4",
                                                "title": "Results of a SAR Analysis"
                                            },
                                            {
                                                "id": "sar_5",
                                                "title": "Principle: Alteration of an Active Substance"
                                            },
                                            {
                                                "id": "sar_6",
                                                "title": "Development: a Single Modification at a Time"
                                            },
                                            {
                                                "id": "sar_7",
                                                "title": "Iterative Process"
                                            },
                                            {
                                                "id": "sar_8",
                                                "title": "Chemical Modifications and Medicinal Chemist Tools"
                                            },
                                            {
                                                "id": "sar_9",
                                                "title": "Chemistry is the Limiting Factor"
                                            },
                                            {
                                                "id": "sar_10",
                                                "title": "Role of the Functional Groups in the Reference Structure"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_11",
                                        "title": "Probing H-Bond Interactions",
                                        "children": [
                                            {
                                                "id": "sar_11_2",
                                                "title": "Principle for Probing Hydrogen Bond Interactions"
                                            },
                                            {
                                                "id": "sar_12",
                                                "title": "Hydroxyl: Hypothetical H-Bond Interactions",
                                                "children": [
                                                    {
                                                        "id": "sar_13",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_14",
                                                        "title": "Testing H-Bond Donor Capability of the Hydroxyl"
                                                    },
                                                    {
                                                        "id": "sar_15",
                                                        "title": "Testing H-Bond Acceptor Capability of the Hydroxyl"
                                                    },
                                                    {
                                                        "id": "sar_16",
                                                        "title": "Example 1: Pyrazolopyrimidines"
                                                    },
                                                    {
                                                        "id": "sar_17",
                                                        "title": "Example 2: Benzimidazoles"
                                                    },
                                                    {
                                                        "id": "sar_18",
                                                        "title": "Example 3: Pyrrolopyrimidine"
                                                    },
                                                    {
                                                        "id": "sar_19",
                                                        "title": "Example 4: Salicylanilides"
                                                    },
                                                    {
                                                        "id": "sar_20",
                                                        "title": "Example 5: Isoflavones"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_21",
                                                "title": "Carbonyl: Hypothetical H-Bond Interactions",
                                                "children": [
                                                    {
                                                        "id": "sar_22",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_23",
                                                        "title": "Example 1: Aminobenzophenones"
                                                    },
                                                    {
                                                        "id": "sar_24",
                                                        "title": "Example 2: Thiazolidine-dione"
                                                    },
                                                    {
                                                        "id": "sar_25",
                                                        "title": "Example 3: Pyrazolopyridines"
                                                    },
                                                    {
                                                        "id": "sar_26",
                                                        "title": "Example 4: Naphthyl Ketones"
                                                    },
                                                    {
                                                        "id": "sar_27",
                                                        "title": "Example 5: Cyclic Peptides"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_28",
                                                "title": "Amide",
                                                "children": [
                                                    {
                                                        "id": "sar_29",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_30",
                                                        "title": "Testing H-Bond Acceptor Capability of the Carbonyl"
                                                    },
                                                    {
                                                        "id": "sar_31",
                                                        "title": "Testing H-Bond Donor Capability of the Nitrogen"
                                                    },
                                                    {
                                                        "id": "sar_32",
                                                        "title": "Example 1: Lactam Tricylic"
                                                    },
                                                    {
                                                        "id": "sar_33",
                                                        "title": "Example 2: Pyrrolopyrimidinones"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_34",
                                                "title": "Primary Amines",
                                                "children": [
                                                    {
                                                        "id": "sar_35",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_36",
                                                        "title": "Testing H-Bond Donor Capability of the Amines"
                                                    },
                                                    {
                                                        "id": "sar_37",
                                                        "title": "Example 1: Imidazole Acetic Acids"
                                                    },
                                                    {
                                                        "id": "sar_38",
                                                        "title": "Example 2: Salicylanilides"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_39",
                                                "title": "Secondary Amines",
                                                "children": [
                                                    {
                                                        "id": "sar_40",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_41",
                                                        "title": "Testing H-Bond Donor Capability of the Amines"
                                                    },
                                                    {
                                                        "id": "sar_42",
                                                        "title": "Example 1: Imidazoquinoxalines"
                                                    },
                                                    {
                                                        "id": "sar_43",
                                                        "title": "Example 2: Anilinopyrimidines"
                                                    },
                                                    {
                                                        "id": "sar_44_s1",
                                                        "title": "Example 3: Aminoquinazolines",
                                                        "children": [
                                                            {
                                                                "id": "sar_44_s2",
                                                                "title": "Browser of Aminoquinazolines Analogs "
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_45",
                                                "title": "Tertiary Amines",
                                                "children": [
                                                    {
                                                        "id": "sar_45_b",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_46",
                                                        "title": "Example Dihydropyridopyrimidones"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_47",
                                                "title": "Aromatic Nitrogens",
                                                "children": [
                                                    {
                                                        "id": "sar_48",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_49",
                                                        "title": "Testing H-Bond Donor Capability of the Amines"
                                                    },
                                                    {
                                                        "id": "sar_50",
                                                        "title": "Example 1: Imidazoles and Oxazoles"
                                                    },
                                                    {
                                                        "id": "sar_51",
                                                        "title": "Example 2: Pyrrolyl Ureas"
                                                    },
                                                    {
                                                        "id": "sar_52_s1",
                                                        "title": "Example 3: Anilinoquinazolines",
                                                        "children": [
                                                            {
                                                                "id": "sar_52_s2",
                                                                "title": "Example 3: X-Ray Data"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_53",
                                                "title": "Carboxylic Acids",
                                                "children": [
                                                    {
                                                        "id": "sar_54",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_55",
                                                        "title": "Testing H-Bond Donor Capability of the COOH"
                                                    },
                                                    {
                                                        "id": "sar_56",
                                                        "title": "Example 1: Imidazole Carboxylic Acids"
                                                    },
                                                    {
                                                        "id": "sar_57",
                                                        "title": "Example 2: Pyrrolopyrimidines"
                                                    },
                                                    {
                                                        "id": "sar_58",
                                                        "title": "Example 3: Peptide-Based Structures"
                                                    },
                                                    {
                                                        "id": "sar_59",
                                                        "title": "Example 4: Aminoquinolones"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_60",
                                                "title": "Ethers",
                                                "children": [
                                                    {
                                                        "id": "sar_61",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_62",
                                                        "title": "Example 1: Epothilone A"
                                                    },
                                                    {
                                                        "id": "sar_63",
                                                        "title": "Example 2: Clofibrate"
                                                    },
                                                    {
                                                        "id": "sar_64",
                                                        "title": "Example 3: Piperidine Renin Inhibitors"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_65",
                                                "title": "Cyano",
                                                "children": [
                                                    {
                                                        "id": "sar_66",
                                                        "title": "Testing the Existence of H-Bond Interactions"
                                                    },
                                                    {
                                                        "id": "sar_67",
                                                        "title": "Example 1: Anilinopyrimidines"
                                                    },
                                                    {
                                                        "id": "sar_68",
                                                        "title": "Example 2: Quinolinecarbonitriles"
                                                    },
                                                    {
                                                        "id": "sar_69",
                                                        "title": "Example 3: Pyrrolopyrimidines"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_70",
                                        "title": "Probing Ionic Interactions",
                                        "children": [
                                            {
                                                "id": "sar_70_b",
                                                "title": "Principle for Probing Ionic Interactions"
                                            },
                                            {
                                                "id": "sar_71",
                                                "title": "Carboxylates"
                                            },
                                            {
                                                "id": "sar_72",
                                                "title": "Amines"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_73",
                                        "title": "Probing Hydrophobic Interactions",
                                        "children": [
                                            {
                                                "id": "sar_153",
                                                "title": "Importance of Hydrophobic Interactions"
                                            },
                                            {
                                                "id": "sar_74",
                                                "title": "Principles for Probing Hydrophobic Interactions",
                                                "children": [
                                                    {
                                                        "id": "sar_75",
                                                        "title": "Alteration of Ring Size"
                                                    },
                                                    {
                                                        "id": "sar_76",
                                                        "title": "Example 1: Probing of a Hydrophobic Pocket"
                                                    },
                                                    {
                                                        "id": "sar_77",
                                                        "title": "Example 2 : Varying Ring Size"
                                                    },
                                                    {
                                                        "id": "sar_78",
                                                        "title": "Example 3: Probing a Hydrophobic Pocket"
                                                    },
                                                    {
                                                        "id": "sar_79",
                                                        "title": "Example 4: Fusion with Additional Rings"
                                                    },
                                                    {
                                                        "id": "sar_80",
                                                        "title": "Homologation of Alkyl Chains"
                                                    },
                                                    {
                                                        "id": "sar_81",
                                                        "title": "Example 1 of Homologation"
                                                    },
                                                    {
                                                        "id": "sar_82",
                                                        "title": "Example 2 of Homologation"
                                                    },
                                                    {
                                                        "id": "sar_83",
                                                        "title": "Example 3 of Homologation"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_84",
                                                "title": "Exploring the Width of a Hydrophobic Pocket",
                                                "children": [
                                                    {
                                                        "id": "sar_85",
                                                        "title": "Example 1: Pyrazoles"
                                                    },
                                                    {
                                                        "id": "sar_86_s1",
                                                        "title": "Example 2: Indolinones",
                                                        "children": [
                                                            {
                                                                "id": "sar_86_s2",
                                                                "title": "Variations with the Pyrrole Moiety"
                                                            },
                                                            {
                                                                "id": "sar_86_s3",
                                                                "title": "X-Ray Data of Indolinone Analog"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "sar_87_s1",
                                                        "title": "Example 3: Pyridopyrimidines",
                                                        "children": [
                                                            {
                                                                "id": "sar_87_s2",
                                                                "title": "X-Ray Data with Pyridopyrimidine Structure"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_88",
                                                "title": "Probing the Polarity of a Pocket",
                                                "children": [
                                                    {
                                                        "id": "sar_89",
                                                        "title": "Example: Dopamine Antagonists"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_89_a",
                                        "title": "Probing Other Interactions",
                                        "children": [
                                            {
                                                "id": "sar_89_b",
                                                "title": "Halogens",
                                                "children": [
                                                    {
                                                        "id": "sar_90",
                                                        "title": "Example 1: COX-2"
                                                    },
                                                    {
                                                        "id": "sar_91",
                                                        "title": "Example 2: MDM2"
                                                    },
                                                    {
                                                        "id": "sar_92",
                                                        "title": "Example 3: Glycine Antagonists"
                                                    },
                                                    {
                                                        "id": "sar_93",
                                                        "title": "Example 4: EGF-R Kinase Inhibitors"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_94",
                                                "title": "Probing Aromatic Ring Positions",
                                                "children": [
                                                    {
                                                        "id": "sar_95",
                                                        "title": "KDR Inhibitors"
                                                    },
                                                    {
                                                        "id": "sar_96_s1",
                                                        "title": "Anthranilamide - Factor Xa Inhibitors",
                                                        "children": [
                                                            {
                                                                "id": "sar_96_s2",
                                                                "title": "Exploration of Anthranilamide Substitution"
                                                            },
                                                            {
                                                                "id": "sar_96_s3",
                                                                "title": "Replacement of the Benzothiophene Ring"
                                                            },
                                                            {
                                                                "id": "sar_96_s4",
                                                                "title": "Useful Data Collected for Understanding SAR"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "sar_97_s1",
                                                        "title": "Tetrahydroisoquinoline - Serotonin 5-HT2A Ligands",
                                                        "children": [
                                                            {
                                                                "id": "sar_97_s2",
                                                                "title": "Preferred Position for the Chlorine"
                                                            },
                                                            {
                                                                "id": "sar_97_s3",
                                                                "title": "Most Potent Analogs"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_98",
                                        "title": "Modifications to Alter the Geometry of the Ligand",
                                        "children": [
                                            {
                                                "id": "sar_99",
                                                "title": "Modification to Alter the Geometry of the Ligand"
                                            },
                                            {
                                                "id": "sar_100",
                                                "title": "The Amide Function",
                                                "children": [
                                                    {
                                                        "id": "sar_101",
                                                        "title": "SAR Example with an Amide Moiety"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_102",
                                                "title": "Ortho Substitution of Aromatic Ring"
                                            },
                                            {
                                                "id": "sar_103",
                                                "title": "Cis-Trans Isomers"
                                            },
                                            {
                                                "id": "sar_104_s1",
                                                "title": "Example 1: Cis and Trans Isomers",
                                                "children": [
                                                    {
                                                        "id": "sar_104_s2",
                                                        "title": "Z and E Isomers are in Equilibrium !"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_105",
                                                "title": "Example 2: Cis and Trans Isomers"
                                            },
                                            {
                                                "id": "sar_106",
                                                "title": "Alter Stereochemistry"
                                            },
                                            {
                                                "id": "sar_107",
                                                "title": "Rigid Analogs: SAR Principle",
                                                "children": [
                                                    {
                                                        "id": "sar_108",
                                                        "title": "Example 1: GnRH Antagonists Rigidification"
                                                    },
                                                    {
                                                        "id": "sar_109",
                                                        "title": "Example 2: AChE Rigidification"
                                                    },
                                                    {
                                                        "id": "sar_110",
                                                        "title": "Example 3: p56-lck Inhibitors Rigidification"
                                                    },
                                                    {
                                                        "id": "sar_111",
                                                        "title": "Example 4: Angiotensin-II Receptor Antagonists"
                                                    },
                                                    {
                                                        "id": "sar_112",
                                                        "title": "Example 5: Dopaminergics Rigidification"
                                                    },
                                                    {
                                                        "id": "sar_113",
                                                        "title": "Examples 6: Pseudo Rings",
                                                        "children": [
                                                            {
                                                                "id": "sar_114",
                                                                "title": "Anthranilamides"
                                                            },
                                                            {
                                                                "id": "sar_115",
                                                                "title": "Phenoxyphenyltriazoles"
                                                            },
                                                            {
                                                                "id": "sar_116",
                                                                "title": "Salicylanilides"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "sar_117",
                                                        "title": "Example 7: Good and Bad Rigidification"
                                                    },
                                                    {
                                                        "id": "sar_118",
                                                        "title": "Example 8: Rigidification of a Flexible Molecule"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_119",
                                                "title": "Flexible Analogs: SAR Principle",
                                                "children": [
                                                    {
                                                        "id": "sar_120",
                                                        "title": "Ring Suppression: Doxepin"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_121",
                                                "title": "Alteration of Interatomic Distances"
                                            },
                                            {
                                                "id": "sar_122",
                                                "title": "Alteration of the Stereochemistry of the Ligand"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_123",
                                        "title": "Complexity of SAR Analyses",
                                        "children": [
                                            {
                                                "id": "sar_124",
                                                "title": "Complexity of the Structures Concerned"
                                            },
                                            {
                                                "id": "sar_125",
                                                "title": "Observations with no Explanations"
                                            },
                                            {
                                                "id": "sar_126",
                                                "title": "Local Changes and Global Consequences",
                                                "children": [
                                                    {
                                                        "id": "sar_127",
                                                        "title": "Small Modification that Substantially Alters the Geometry"
                                                    },
                                                    {
                                                        "id": "sar_128",
                                                        "title": "Small Modification that Interferes with Other Interactions"
                                                    },
                                                    {
                                                        "id": "sar_129",
                                                        "title": "Modification that Alters the Binding Orientation"
                                                    },
                                                    {
                                                        "id": "sar_130",
                                                        "title": "Change that Alters a Characteristic of the Substance",
                                                        "children": [
                                                            {
                                                                "id": "sar_131",
                                                                "title": "pKa"
                                                            },
                                                            {
                                                                "id": "sar_132",
                                                                "title": "LogP"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_133",
                                                "title": "Non Additivity of Biological Effects",
                                                "children": [
                                                    {
                                                        "id": "sar_134_s1",
                                                        "title": "Additivity in Steroids: Norethisterone",
                                                        "children": [
                                                            {
                                                                "id": "sar_134_s2",
                                                                "title": "Additivity of Biological Effects"
                                                            },
                                                            {
                                                                "id": "sar_134_s3",
                                                                "title": "Non Additivity of Biological Effects"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "sar_135",
                                                        "title": "Furanyl Example: Non-Additivity"
                                                    },
                                                    {
                                                        "id": "sar_136",
                                                        "title": "Phenoxypyrimidines: Non Additivity"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_137",
                                                "title": "Being Trapped with Poor Biological Activities",
                                                "children": [
                                                    {
                                                        "id": "sar_138_s1",
                                                        "title": "The Dioxobenzothiazole Scaffold"
                                                    },
                                                    {
                                                        "id": "sar_138_s2",
                                                        "title": "Origin of the Problem"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "sar_139",
                                                "title": "The Combinatorial Era"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_140",
                                        "title": "Example of Good Exploitation of SAR Complexity",
                                        "children": [
                                            {
                                                "id": "sar_141",
                                                "title": "The Banyu Story with the Urea Structure"
                                            },
                                            {
                                                "id": "sar_142",
                                                "title": "Importance of the Entire Urea Moiety"
                                            },
                                            {
                                                "id": "sar_143",
                                                "title": "Bioactive Conformation?"
                                            },
                                            {
                                                "id": "sar_144",
                                                "title": "Design of Compounds with a Cis Conformation"
                                            },
                                            {
                                                "id": "sar_145",
                                                "title": "Good Exploitation of the SAR Analyses"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_quiz",
                                        "title": "CHAPTER QUIZZES",
                                        "children": [
                                            {
                                                "id": "sar_quiz1",
                                                "title": "Quiz 1"
                                            },
                                            {
                                                "id": "sar_quiz2",
                                                "title": "Quiz 2"
                                            },
                                            {
                                                "id": "sar_quiz3",
                                                "title": "Quiz 3"
                                            },
                                            {
                                                "id": "sar_quiz4",
                                                "title": "Quiz 4"
                                            },
                                            {
                                                "id": "sar_quiz5",
                                                "title": "Quiz 5"
                                            },
                                            {
                                                "id": "sar_quiz6",
                                                "title": "Quiz 6"
                                            },
                                            {
                                                "id": "sar_quiz7",
                                                "title": "Quiz 7"
                                            },
                                            {
                                                "id": "sar_quiz8",
                                                "title": "Quiz 8"
                                            },
                                            {
                                                "id": "sar_quiz9",
                                                "title": "Quiz 9"
                                            },
                                            {
                                                "id": "sar_quiz10",
                                                "title": "Quiz 10"
                                            },
                                            {
                                                "id": "sar_quiz11",
                                                "title": "Quiz 11"
                                            },
                                            {
                                                "id": "sar_quiz12",
                                                "title": "Quiz 12"
                                            },
                                            {
                                                "id": "sar_quiz13",
                                                "title": "Quiz 13"
                                            },
                                            {
                                                "id": "sar_quiz14",
                                                "title": "Quiz 14"
                                            },
                                            {
                                                "id": "sar_quiz15",
                                                "title": "Quiz 15"
                                            },
                                            {
                                                "id": "sar_quiz16",
                                                "title": "Quiz 16"
                                            },
                                            {
                                                "id": "sar_quiz17",
                                                "title": "Quiz 17"
                                            },
                                            {
                                                "id": "sar_quiz18",
                                                "title": "Quiz 18"
                                            },
                                            {
                                                "id": "sar_quiz19",
                                                "title": "Quiz 19"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "sar_case",
                                "title": "Case Studies in SAR Analyses",
                                "dateCreated": "080601",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "sar_case_subject_01",
                                        "title": "Case Study-1 : Banyu Example",
                                        "children": [
                                            {
                                                "id": "case_studies_sar_10",
                                                "title": "The Banyu Story with the Urea Structure"
                                            },
                                            {
                                                "id": "case_studies_sar_11",
                                                "title": "Importance of the Entire Urea Moiety"
                                            },
                                            {
                                                "id": "case_studies_sar_12",
                                                "title": "Bioactive Conformation?"
                                            },
                                            {
                                                "id": "case_studies_sar_13",
                                                "title": "Design of Compounds with a Cis Conformation"
                                            },
                                            {
                                                "id": "case_studies_sar_14",
                                                "title": "Good Exploitation of the SAR Analyses"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_case_subject_02",
                                        "title": "Case Study-2 : Dioxobenzothiazole Example",
                                        "children": [
                                            {
                                                "id": "case_studies_sar_15",
                                                "title": "The Dioxobenzothiazole Scaffold"
                                            },
                                            {
                                                "id": "case_studies_sar_16",
                                                "title": "Optimization of the Dioxobenzothiazole Lead"
                                            },
                                            {
                                                "id": "case_studies_sar_17",
                                                "title": "SAR Analyses"
                                            },
                                            {
                                                "id": "case_studies_sar_18",
                                                "title": "Docking of the Dioxobenzothiazole Molecule"
                                            },
                                            {
                                                "id": "case_studies_sar_19",
                                                "title": "Being Trapped with a Bad Scaffold"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_5_ext_c5_8.5_1",
                                        "title": "Case Study-3 : EGF-R Kinase Inhibitors",
                                        "children": [
                                            {
                                                "id": "v1_5_ext_c5_8.5_2",
                                                "title": "Therapeutic Utility of EGF-R Kinase Inhibitors"
                                            },
                                            {
                                                "id": "v1_5_ext_c5_8.5_3",
                                                "title": "Amino-4 Quinazoline Inhibitors: Iressa and Tarceva"
                                            },
                                            {
                                                "id": "v1_5_ext_c5_8.5_4_s1",
                                                "title": "Analysis of Tarceva Binding to the EGF-R Kinase (1\/4)",
                                                "children": [
                                                    {
                                                        "id": "v1_5_ext_c5_8.5_4_s2",
                                                        "title": "Analysis of Tarceva Binding to the EGF-R Kinase (2\/4)"
                                                    },
                                                    {
                                                        "id": "v1_5_ext_c5_8.5_4_s3",
                                                        "title": "Analysis of Tarceva Binding to the EGF-R Kinase (3\/4)"
                                                    },
                                                    {
                                                        "id": "v1_5_ext_c5_8.5_4_s4",
                                                        "title": "Analysis of Tarceva Binding to the EGF-R Kinase (4\/4)"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_5_ext_c5_8.5_9_s1",
                                                "title": "SAR of the Quinazoline Scaffold"
                                            },
                                            {
                                                "id": "v1_5_ext_c5_8.5_9_s2",
                                                "title": "SAR of Fused Rings in the  Quinazoline Scaffold"
                                            },
                                            {
                                                "id": "v1_5_ext_c5_8.5_12_s1",
                                                "title": "Analysis of a Surprising Observation",
                                                "children": [
                                                    {
                                                        "id": "v1_5_ext_c5_8.5_12_s2",
                                                        "title": "Analysis of Atomic Charges in the Different Analogs"
                                                    },
                                                    {
                                                        "id": "v1_5_ext_c5_8.5_12_s3",
                                                        "title": "Optimal Binding of Inhibitor 17"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_case_subject_05",
                                        "title": "Case Study-4 : Nifedipine Example",
                                        "children": [
                                            {
                                                "id": "case_studies_sar_33",
                                                "title": "Two Inactive Analogs of Nifedipine"
                                            },
                                            {
                                                "id": "case_studies_sar_34",
                                                "title": "Analysis of the 4' Substituted Analogs of Nifedipine"
                                            },
                                            {
                                                "id": "case_studies_sar_35",
                                                "title": "Analysis of the 4 Substituted Analogs of Nifedipine"
                                            },
                                            {
                                                "id": "case_studies_sar_36",
                                                "title": "Molecular Geometry of Phenyl-4 Dihydropyridine"
                                            },
                                            {
                                                "id": "case_studies_sar_37",
                                                "title": "Preferred Conformation of Nifedipine"
                                            },
                                            {
                                                "id": "case_studies_sar_38",
                                                "title": "Preferred Conformation of Methyl-4 Nifedipine"
                                            },
                                            {
                                                "id": "case_studies_sar_39 ",
                                                "title": "Bioactive Conformation of Nifedipine-Like Antagonists"
                                            },
                                            {
                                                "id": "case_studies_sar_40",
                                                "title": "SAR Analyses Require Great Attention"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_case_subject_03",
                                        "title": "Case Study-5 : Carbonic Anhydrase Example",
                                        "children": [
                                            {
                                                "id": "v1_c7_12_1",
                                                "title": "The Carbonic Anhydrase Protein"
                                            },
                                            {
                                                "id": "v1_c7_12_2",
                                                "title": "Therapeutic Utility of CA Inhibitors"
                                            },
                                            {
                                                "id": "v1_c7_12_3",
                                                "title": "MK-417 is a Potent Inhibitor of CA"
                                            },
                                            {
                                                "id": "v1_c7_12_4_s1",
                                                "title": "Binding of MK-417 with CA Protein (1\/5)",
                                                "children": [
                                                    {
                                                        "id": "v1_c7_12_4_s2",
                                                        "title": "Binding of MK-417 with CA Protein (2\/5)"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_4_s3",
                                                        "title": "Binding of MK-417 with CA Protein (3\/5)"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_4_s4",
                                                        "title": "Binding of MK-417 with CA Protein (4\/5)"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_4_s5",
                                                        "title": "Binding of MK-417 with CA Protein (5\/5)"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c7_12_5_s1",
                                                "title": "S Enantiomer is more Potent than the R",
                                                "children": [
                                                    {
                                                        "id": "v1_c7_12_5_s2",
                                                        "title": "Geometry of Isobutyl Side Chain by X-rays "
                                                    },
                                                    {
                                                        "id": "v1_c7_12_5_s3",
                                                        "title": "Axial\/Equatorial Orientation of the Side Chain"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_5_s4",
                                                        "title": "Bioactive Conformation of MK-417 "
                                                    },
                                                    {
                                                        "id": "v1_c7_12_5_s5",
                                                        "title": "Energy Considerations"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_5_s6",
                                                        "title": "Results of the Analyses"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c7_12_6",
                                                "title": "Optimization of MK-417"
                                            },
                                            {
                                                "id": "v1_c7_12_7",
                                                "title": "Dorzolamide, a Potent Inhibitor of CA"
                                            },
                                            {
                                                "id": "v1_c7_12_8",
                                                "title": "Complex of CA with Dorzolamide"
                                            },
                                            {
                                                "id": "v1_c7_12_9_s1",
                                                "title": "Binding of Dorzolamide with CA Protein (1\/5)",
                                                "children": [
                                                    {
                                                        "id": "v1_c7_12_9_s2",
                                                        "title": "Binding of Dorzolamide with CA Protein (2\/5)"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_9_s3",
                                                        "title": "Binding of Dorzolamide with CA Protein (3\/5)"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_9_s4",
                                                        "title": "Binding of Dorzolamide with CA Protein (4\/5)"
                                                    },
                                                    {
                                                        "id": "v1_c7_12_9_s5",
                                                        "title": "Binding of Dorzolamide with CA Protein (5\/5)"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_c2_12",
                                        "title": "Case Study-6 : {beta}-Lactam Antibiotics",
                                        "children": [
                                            {
                                                "id": "v1_c2_12_1",
                                                "title": "Antibiotic Activities in the Cephalosporin Series"
                                            },
                                            {
                                                "id": "v1_c2_12_2_s1",
                                                "title": "Stereochemical Hypothesis",
                                                "children": [
                                                    {
                                                        "id": "v1_c2_12_2_s2",
                                                        "title": "Same Stereochemistry in the two Structures"
                                                    },
                                                    {
                                                        "id": "v1_c2_12_2_s3",
                                                        "title": "Inactivity not due to a Wrong Stereochemistry"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c2_12_3_s1",
                                                "title": "Attempts Towards a Geometrical Interpretation",
                                                "children": [
                                                    {
                                                        "id": "v1_c2_12_3_s2",
                                                        "title": "Flexibility of the Enzyme ?"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c2_12_4",
                                                "title": "The Lactam Nitrogen Pyramidality Hypothesis"
                                            },
                                            {
                                                "id": "v1_c2_12_5_s1",
                                                "title": "Deficiency of the Nitrogen Pyramidality Hypothesis",
                                                "children": [
                                                    {
                                                        "id": "v1_c2_12_5_s2",
                                                        "title": "Penem and Carbapenems"
                                                    },
                                                    {
                                                        "id": "v1_c2_12_5_s3",
                                                        "title": "Pyramidality of Nitrogen Atom ?"
                                                    },
                                                    {
                                                        "id": "v1_c2_12_5_s4",
                                                        "title": "Geometrical Aspects Need to be Reassessed"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c2_12_6_s1",
                                                "title": "Bioactive Conformation of Penicillins?",
                                                "children": [
                                                    {
                                                        "id": "v1_c2_12_6_s2",
                                                        "title": "Pseudorotation of the Penam Ring"
                                                    },
                                                    {
                                                        "id": "v1_c2_12_6_s3",
                                                        "title": "The two Forms were Found in X-ray Determinations"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c2_12_7_s1",
                                                "title": "Revealing Bioactive Conformation of Penicillins",
                                                "children": [
                                                    {
                                                        "id": "v1_c2_12_7_s2",
                                                        "title": "Modeling Analyses"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_c2_12_8",
                                                "title": "Separation Between Active and Inactive Molecules"
                                            },
                                            {
                                                "id": "v1_c2_12_9",
                                                "title": "Other Beta-Lactam Antibiotic Structures"
                                            },
                                            {
                                                "id": "v1_c2_12_10",
                                                "title": "Browser of Beta-Lactam Antibiotics"
                                            },
                                            {
                                                "id": "v1_c2_12_11",
                                                "title": "Validation and Perspectives"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_case_subject_04",
                                        "title": "Case Study-7 : Anilino-Quinazoline Example",
                                        "children": [
                                            {
                                                "id": "case_studies_sar_20",
                                                "title": "Potent Inhibitor of the EGF-R Protein Kinase"
                                            },
                                            {
                                                "id": "case_studies_sar_21",
                                                "title": "SAR: Substitution of Anilino N4"
                                            },
                                            {
                                                "id": "case_studies_sar_22",
                                                "title": "N-Methyl Analog"
                                            },
                                            {
                                                "id": "case_studies_sar_23",
                                                "title": "SAR Observations in a 4-Anilino-Quinazolines Series"
                                            },
                                            {
                                                "id": "case_studies_sar_24",
                                                "title": "Conformation of 4-Anilino-Quinazoline Molecules"
                                            },
                                            {
                                                "id": "case_studies_sar_25",
                                                "title": "Geometry of 4-Anilino-Quinazoline Structures"
                                            },
                                            {
                                                "id": "case_studies_sar_26",
                                                "title": "Experimental Conformations of Anilino-Quinazolines"
                                            },
                                            {
                                                "id": "case_studies_sar_27",
                                                "title": "SAR: Substitution of N4 is Detrimental to Potency"
                                            },
                                            {
                                                "id": "case_studies_sar_28",
                                                "title": "Torsion Angle N3-C4-N4-C1' is Important for Potency"
                                            },
                                            {
                                                "id": "case_studies_sar_29",
                                                "title": "Energy of Bioactive Conformers"
                                            },
                                            {
                                                "id": "case_studies_sar_30",
                                                "title": "Browser of Selected Anilino-Quinazoline Analogs"
                                            },
                                            {
                                                "id": "case_studies_sar_31",
                                                "title": "Docking of 4-Anilino-Quinazoline Lead"
                                            },
                                            {
                                                "id": "case_studies_sar_32",
                                                "title": "Summary of Structural Analyses"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "sar_case_subject_062",
                                        "title": "ADDITIONAL CASE STUDIES",
                                        "children": [
                                            {
                                                "id": "case_studies_sar_60",
                                                "title": "Additional Case Studies"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "drug_stories",
                                "title": "Success Stories in Drug Discovery",
                                "dateCreated": "080601",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "analogdesign_mimicry",
                        "title": "Analog Design and Molecular Mimicry",
                        "children": [
                            {
                                "id": "bioiso",
                                "title": "Bioisosterism",
                                "dateCreated": "070201",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "bioiso_01_00_s1",
                                        "title": "Introduction",
                                        "children": [
                                            {
                                                "id": "bioiso_01_01",
                                                "title": "What is Bioisosterism?"
                                            },
                                            {
                                                "id": "bioiso_01_02",
                                                "title": "History of the Concept of Bioisosterism"
                                            },
                                            {
                                                "id": "bioiso_01_03",
                                                "title": "Langmuir (1919): Comolecules and Isosteres"
                                            },
                                            {
                                                "id": "bioiso_01_04",
                                                "title": "Grimm (1925)"
                                            },
                                            {
                                                "id": "bioiso_01_05",
                                                "title": "Erlenmeyer (1932)"
                                            },
                                            {
                                                "id": "bioiso_01_06",
                                                "title": "Friedman (1951): Concept of Bioisosteres"
                                            },
                                            {
                                                "id": "bioiso_01_07",
                                                "title": "Thornber (1979)"
                                            },
                                            {
                                                "id": "bioiso_01_08",
                                                "title": "Burger (1991)"
                                            },
                                            {
                                                "id": "bioiso_01_09",
                                                "title": "Cheminformatics Era (1993)"
                                            },
                                            {
                                                "id": "bioiso_01_10",
                                                "title": "Remark on Stereochemical Aspects"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_02_00_s2",
                                        "title": "Typical Isosteres",
                                        "children": [
                                            {
                                                "id": "bioiso_02_01",
                                                "title": "Classification of Typical Isosteres"
                                            },
                                            {
                                                "id": "bioiso_02_02",
                                                "title": "Monovalent Atoms or Groups"
                                            },
                                            {
                                                "id": "bioiso_02_03",
                                                "title": "Divalent Isosteres"
                                            },
                                            {
                                                "id": "bioiso_02_04",
                                                "title": "Trivalent Atoms or Groups"
                                            },
                                            {
                                                "id": "bioiso_02_05",
                                                "title": "Tetrasubstituted Atoms"
                                            },
                                            {
                                                "id": "bioiso_02_06",
                                                "title": "Ring Equivalents"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_03_00_s3",
                                        "title": "Medicinal Chemistry Use",
                                        "children": [
                                            {
                                                "id": "bioiso_03_01",
                                                "title": "A Simple Concept for Many Applications"
                                            },
                                            {
                                                "id": "bioiso_03_02",
                                                "title": "Adapt Chemical Structures to Feasible Syntheses"
                                            },
                                            {
                                                "id": "bioiso_03_03",
                                                "title": "Change the Type of Biological Activity",
                                                "children": [
                                                    {
                                                        "id": "bioiso_03_04",
                                                        "title": "Example 1: Tricyclic Structures"
                                                    },
                                                    {
                                                        "id": "bioiso_03_05",
                                                        "title": "Example 2: Angiotensin-II Receptor Ligands"
                                                    },
                                                    {
                                                        "id": "bioiso_03_06",
                                                        "title": "Example 3: Steroid Analogs"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_03_07",
                                                "title": "Achieve Patentability"
                                            },
                                            {
                                                "id": "bioiso_03_08",
                                                "title": "Mimic an Endogenous Ligand"
                                            },
                                            {
                                                "id": "bioiso_03_09",
                                                "title": "Improve Potency"
                                            },
                                            {
                                                "id": "bioiso_03_10",
                                                "title": "Improve Selectivity"
                                            },
                                            {
                                                "id": "bioiso_03_11",
                                                "title": "Reduce Side Effects"
                                            },
                                            {
                                                "id": "bioiso_03_12",
                                                "title": "Reduce Toxicity"
                                            },
                                            {
                                                "id": "bioiso_03_13",
                                                "title": "Improve Bioavailability"
                                            },
                                            {
                                                "id": "bioiso_03_14",
                                                "title": "Exploit Metabolism"
                                            },
                                            {
                                                "id": "bioiso_03_15",
                                                "title": "Modify pKa"
                                            },
                                            {
                                                "id": "bioiso_03_16",
                                                "title": "Increase Chemical Stability"
                                            },
                                            {
                                                "id": "bioiso_03_17",
                                                "title": "Combinatorial Chemistry"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_04_00_s4",
                                        "title": "Examples of Natural Bioisosteres",
                                        "children": [
                                            {
                                                "id": "bioiso_04_01",
                                                "title": "Bioisosteres in Nature"
                                            },
                                            {
                                                "id": "bioiso_04_02",
                                                "title": "Aminoacids"
                                            },
                                            {
                                                "id": "bioiso_04_03",
                                                "title": "Nucleotides"
                                            },
                                            {
                                                "id": "bioiso_04_04",
                                                "title": "Sugars"
                                            },
                                            {
                                                "id": "bioiso_04_05",
                                                "title": "Lipids"
                                            },
                                            {
                                                "id": "bioiso_04_06",
                                                "title": "Steroid Hormones"
                                            },
                                            {
                                                "id": "bioiso_04_07",
                                                "title": "Carbohydrates"
                                            },
                                            {
                                                "id": "bioiso_04_08",
                                                "title": "Catecholamines"
                                            },
                                            {
                                                "id": "bioiso_04_09",
                                                "title": "Penicillins and Cephalosporins"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_05_00_s5",
                                        "title": "Dictionary of Bioisosteres",
                                        "children": [
                                            {
                                                "id": "bioiso_05_01",
                                                "title": "Dictionary of Bioisosteric Replacements"
                                            },
                                            {
                                                "id": "bioiso_05_02",
                                                "title": "Allyl"
                                            },
                                            {
                                                "id": "bioiso_05_03",
                                                "title": "Amide"
                                            },
                                            {
                                                "id": "bioiso_05_04",
                                                "title": "Amino-Acids"
                                            },
                                            {
                                                "id": "bioiso_05_05",
                                                "title": "Azomethine"
                                            },
                                            {
                                                "id": "bioiso_05_06",
                                                "title": "Benzene"
                                            },
                                            {
                                                "id": "bioiso_05_07",
                                                "title": "Carbonyl"
                                            },
                                            {
                                                "id": "bioiso_05_08",
                                                "title": "Carboxylic Acid"
                                            },
                                            {
                                                "id": "bioiso_05_09",
                                                "title": "Catechol"
                                            },
                                            {
                                                "id": "bioiso_05_10",
                                                "title": "Ester"
                                            },
                                            {
                                                "id": "bioiso_05_11",
                                                "title": "Halogen"
                                            },
                                            {
                                                "id": "bioiso_05_12",
                                                "title": "Hydrogen"
                                            },
                                            {
                                                "id": "bioiso_05_13",
                                                "title": "Hydroxyl"
                                            },
                                            {
                                                "id": "bioiso_05_14",
                                                "title": "Indole"
                                            },
                                            {
                                                "id": "bioiso_05_15",
                                                "title": "Isopropyl"
                                            },
                                            {
                                                "id": "bioiso_05_16",
                                                "title": "Naphthalene"
                                            },
                                            {
                                                "id": "bioiso_05_17",
                                                "title": "Peptide Surrogates"
                                            },
                                            {
                                                "id": "bioiso_05_21",
                                                "title": "Phenol"
                                            },
                                            {
                                                "id": "bioiso_05_22",
                                                "title": "Pyridine"
                                            },
                                            {
                                                "id": "bioiso_05_23",
                                                "title": "Ring"
                                            },
                                            {
                                                "id": "bioiso_05_24",
                                                "title": "Sulfonyl"
                                            },
                                            {
                                                "id": "bioiso_05_25",
                                                "title": "Spacer"
                                            },
                                            {
                                                "id": "bioiso_05_26",
                                                "title": "Thioether"
                                            },
                                            {
                                                "id": "bioiso_05_27",
                                                "title": "Thiourea"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_06_00_s6",
                                        "title": "Examples of Bioisosteric Transformations",
                                        "children": [
                                            {
                                                "id": "bioiso_06_01",
                                                "title": "Four Types of Bioisosteric Transformations"
                                            },
                                            {
                                                "id": "bioiso_06_02",
                                                "title": "Ring-to-Ring Transformations",
                                                "children": [
                                                    {
                                                        "id": "bioiso_06_03",
                                                        "title": "Example 1"
                                                    },
                                                    {
                                                        "id": "bioiso_06_04",
                                                        "title": "Example 2"
                                                    },
                                                    {
                                                        "id": "bioiso_06_05",
                                                        "title": "Example 3"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_06_06",
                                                "title": "Chain-to-Ring Transformations",
                                                "children": [
                                                    {
                                                        "id": "bioiso_06_07",
                                                        "title": "Example 1"
                                                    },
                                                    {
                                                        "id": "bioiso_06_08",
                                                        "title": "Example 2"
                                                    },
                                                    {
                                                        "id": "bioiso_06_09",
                                                        "title": "Example 3"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_06_10",
                                                "title": "Ring-to-Chain Transformations",
                                                "children": [
                                                    {
                                                        "id": "bioiso_06_11",
                                                        "title": "Example 1"
                                                    },
                                                    {
                                                        "id": "bioiso_06_12",
                                                        "title": "Example 2"
                                                    },
                                                    {
                                                        "id": "bioiso_06_13",
                                                        "title": "Example 3"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_06_14",
                                                "title": "Chain-to-Chain Transformations",
                                                "children": [
                                                    {
                                                        "id": "bioiso_06_15",
                                                        "title": "Example 1"
                                                    },
                                                    {
                                                        "id": "bioiso_06_16",
                                                        "title": "Example 2"
                                                    },
                                                    {
                                                        "id": "bioiso_06_17",
                                                        "title": "Example 3"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_07_00_s7",
                                        "title": "Commercial Bioisosteric Drugs: Examples",
                                        "children": [
                                            {
                                                "id": "bioiso_07_01",
                                                "title": "Angiotensin Receptor Blockers (ARBs)"
                                            },
                                            {
                                                "id": "bioiso_07_02",
                                                "title": "COX-2 Inhibitors"
                                            },
                                            {
                                                "id": "bioiso_07_03",
                                                "title": "Anti-Inflammatory NSAIDs"
                                            },
                                            {
                                                "id": "bioiso_07_04",
                                                "title": "Antiarrhytmic Beta-Adrenergics"
                                            },
                                            {
                                                "id": "bioiso_07_05",
                                                "title": "Neuroleptics"
                                            },
                                            {
                                                "id": "bioiso_07_06",
                                                "title": "Anti-Ulcers"
                                            },
                                            {
                                                "id": "bioiso_07_07",
                                                "title": "Male Erectile Dysfunction Drugs"
                                            },
                                            {
                                                "id": "bioiso_07_08",
                                                "title": "Benzodiazepines"
                                            },
                                            {
                                                "id": "bioiso_07_09",
                                                "title": "Antibacterial Sulfonamides"
                                            },
                                            {
                                                "id": "bioiso_07_10",
                                                "title": "Beta-Lactam Antibiotics"
                                            },
                                            {
                                                "id": "bioiso_07_11",
                                                "title": "Local Anesthetics"
                                            },
                                            {
                                                "id": "bioiso_07_12",
                                                "title": "Glucocorticoid Steroids"
                                            },
                                            {
                                                "id": "bioiso_07_13",
                                                "title": "Statin Drugs"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_08_00_s08",
                                        "title": "Patent Issues with Bioisosterism",
                                        "children": [
                                            {
                                                "id": "bioiso_08_01",
                                                "title": "Limits of Patent Infringements on Structures?"
                                            },
                                            {
                                                "id": "bioiso_08_02",
                                                "title": "The Viagra-Levitra Case"
                                            },
                                            {
                                                "id": "bioiso_08_03",
                                                "title": "The Diazepam-Clobazam Example"
                                            },
                                            {
                                                "id": "bioiso_08_05",
                                                "title": "Patent Issues with Chiral Enantiomers"
                                            },
                                            {
                                                "id": "bioiso_08_06",
                                                "title": "Patentable Drugs by Bioisosterism"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_09_00_s9",
                                        "title": "Programs and Databases on Bioisosterism",
                                        "children": [
                                            {
                                                "id": "bioiso_09_01",
                                                "title": "Computerized Systems"
                                            },
                                            {
                                                "id": "bioiso_09_02",
                                                "title": "EMIL Program"
                                            },
                                            {
                                                "id": "bioiso_09_05",
                                                "title": "BIOISOSTER Program and BIOSTER Database",
                                                "children": [
                                                    {
                                                        "id": "bioiso_09_06",
                                                        "title": "The BIOISOSTER Program"
                                                    },
                                                    {
                                                        "id": "bioiso_09_07",
                                                        "title": "Bioisosteric Morphing of the Query"
                                                    },
                                                    {
                                                        "id": "bioiso_09_08",
                                                        "title": "The Accelrys BIOSTER Database"
                                                    },
                                                    {
                                                        "id": "bioiso_09_09",
                                                        "title": "Example of BIOSTER Database Content"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_09_10",
                                                "title": "BROOD Program",
                                                "children": [
                                                    {
                                                        "id": "bioiso_09_12",
                                                        "title": "Brood Program for Bradykinin Antagonists"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_09_16",
                                                "title": "Organon IBIS Program"
                                            },
                                            {
                                                "id": "bioiso_09_17",
                                                "title": "Novartis Program for Ring Bioisosteres"
                                            },
                                            {
                                                "id": "bioiso_09_18",
                                                "title": "GlaxoSmithKline Program for Ring Replacements"
                                            },
                                            {
                                                "id": "bioiso_09_19",
                                                "title": "COSMOsim Program for Bioisosteric Similarity"
                                            },
                                            {
                                                "id": "bioiso_09_20",
                                                "title": "Cheminformatics Software",
                                                "children": [
                                                    {
                                                        "id": "bioiso_09_21",
                                                        "title": "Daylight: MERLIN Program"
                                                    },
                                                    {
                                                        "id": "bioiso_09_22",
                                                        "title": "Tripos: SYBYL Platform"
                                                    },
                                                    {
                                                        "id": "bioiso_09_24",
                                                        "title": "MDL: ISENTRIS Program",
                                                        "children": [
                                                            {
                                                                "id": "bioiso_09_27",
                                                                "title": "MDL: DiscoveryGate Program"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "bioiso_09_28",
                                                        "title": "CAS: SciFinder Program"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_10_00_s10",
                                        "title": "Review Articles and Books",
                                        "children": [
                                            {
                                                "id": "bioiso_10_01",
                                                "title": "Review Articles on Bioisosterism"
                                            },
                                            {
                                                "id": "bioiso_10_02",
                                                "title": "Books on Bioisosterism"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_11_00_s11",
                                        "title": "Limitations and the Future",
                                        "children": [
                                            {
                                                "id": "bioiso_11_01",
                                                "title": "The Receptor is the Ultimate Decider"
                                            },
                                            {
                                                "id": "bioiso_11_02",
                                                "title": "The Multidimensional Nature of Bioisosterism",
                                                "children": [
                                                    {
                                                        "id": "bioiso_11_03",
                                                        "title": "Shape"
                                                    },
                                                    {
                                                        "id": "bioiso_11_04",
                                                        "title": "Lipophilicity"
                                                    },
                                                    {
                                                        "id": "bioiso_11_05",
                                                        "title": "Electronic Distribution"
                                                    },
                                                    {
                                                        "id": "bioiso_11_06",
                                                        "title": "Hydrogen-Bond Capacity"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "bioiso_11_07",
                                                "title": "Can Bioisosterism be Quantified?"
                                            },
                                            {
                                                "id": "bioiso_11_08",
                                                "title": "The Cheminformatics Era"
                                            },
                                            {
                                                "id": "bioiso_11_09",
                                                "title": "Docking can be used to Generate Bioisosteres"
                                            },
                                            {
                                                "id": "bioiso_11_10",
                                                "title": "Strategic and Financial Considerations"
                                            },
                                            {
                                                "id": "bioiso_11_11",
                                                "title": "Examples of Success and Failures"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "bioiso_quiz",
                                        "title": "CHAPTER QUIZZES",
                                        "children": [
                                            {
                                                "id": "bioiso_quiz001",
                                                "title": "Quiz 1"
                                            },
                                            {
                                                "id": "bioiso_quiz002",
                                                "title": "Quiz 2"
                                            },
                                            {
                                                "id": "bioiso_quiz003",
                                                "title": "Quiz 3"
                                            },
                                            {
                                                "id": "bioiso_quiz004",
                                                "title": "Quiz 4"
                                            },
                                            {
                                                "id": "bioiso_quiz005",
                                                "title": "Quiz 5"
                                            },
                                            {
                                                "id": "bioiso_quiz006",
                                                "title": "Quiz 6"
                                            },
                                            {
                                                "id": "bioiso_quiz007",
                                                "title": "Quiz 7"
                                            },
                                            {
                                                "id": "bioiso_quiz008",
                                                "title": "Quiz 8"
                                            },
                                            {
                                                "id": "bioiso_quiz009",
                                                "title": "Quiz 9"
                                            },
                                            {
                                                "id": "bioiso_quiz010",
                                                "title": "Quiz 10"
                                            },
                                            {
                                                "id": "bioiso_quiz011",
                                                "title": "Quiz 11"
                                            },
                                            {
                                                "id": "bioiso_quiz012",
                                                "title": "Quiz 12"
                                            },
                                            {
                                                "id": "bioiso_quiz013",
                                                "title": "Quiz 13"
                                            },
                                            {
                                                "id": "bioiso_quiz014",
                                                "title": "Quiz 14"
                                            },
                                            {
                                                "id": "bioiso_quiz015",
                                                "title": "Quiz 15"
                                            },
                                            {
                                                "id": "bioiso_quiz016",
                                                "title": "Quiz 16"
                                            },
                                            {
                                                "id": "bioiso_quiz017",
                                                "title": "Quiz 17"
                                            },
                                            {
                                                "id": "bioiso_quiz018",
                                                "title": "Quiz 18"
                                            },
                                            {
                                                "id": "bioiso_quiz019",
                                                "title": "Quiz 19"
                                            },
                                            {
                                                "id": "bioiso_quiz020",
                                                "title": "Quiz 20"
                                            },
                                            {
                                                "id": "bioiso_quiz021",
                                                "title": "Quiz 21"
                                            },
                                            {
                                                "id": "bioiso_quiz022",
                                                "title": "Quiz 22"
                                            },
                                            {
                                                "id": "bioiso_quiz023",
                                                "title": "Quiz 23"
                                            },
                                            {
                                                "id": "bioiso_quiz024",
                                                "title": "Quiz 24"
                                            },
                                            {
                                                "id": "bioiso_quiz025",
                                                "title": "Quiz 25"
                                            },
                                            {
                                                "id": "bioiso_quiz026",
                                                "title": "Quiz 26"
                                            },
                                            {
                                                "id": "bioiso_quiz027",
                                                "title": "Quiz 27"
                                            },
                                            {
                                                "id": "bioiso_quiz028",
                                                "title": "Quiz 28"
                                            },
                                            {
                                                "id": "bioiso_quiz029",
                                                "title": "Quiz 29"
                                            },
                                            {
                                                "id": "bioiso_quiz030",
                                                "title": "Quiz 30"
                                            },
                                            {
                                                "id": "bioiso_quiz031",
                                                "title": "Quiz 31"
                                            },
                                            {
                                                "id": "bioiso_quiz032",
                                                "title": "Quiz 32"
                                            },
                                            {
                                                "id": "bioiso_quiz033",
                                                "title": "Quiz 33"
                                            },
                                            {
                                                "id": "bioiso_quiz034",
                                                "title": "Quiz 34"
                                            },
                                            {
                                                "id": "bioiso_quiz035",
                                                "title": "Quiz 35"
                                            },
                                            {
                                                "id": "bioiso_quiz036",
                                                "title": "Quiz 36"
                                            },
                                            {
                                                "id": "bioiso_quiz037",
                                                "title": "Quiz 37"
                                            },
                                            {
                                                "id": "bioiso_quiz038",
                                                "title": "Quiz 38"
                                            },
                                            {
                                                "id": "bioiso_quiz039",
                                                "title": "Quiz 39"
                                            },
                                            {
                                                "id": "bioiso_quiz040",
                                                "title": "Quiz 40"
                                            },
                                            {
                                                "id": "bioiso_quiz041",
                                                "title": "Quiz 41"
                                            },
                                            {
                                                "id": "bioiso_quiz042",
                                                "title": "Quiz 42"
                                            },
                                            {
                                                "id": "bioiso_quiz043",
                                                "title": "Quiz 43"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "peptido",
                                "title": "Peptidomimetics: Principles and Methods",
                                "dateCreated": "020801",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "v1_d2_1",
                                        "title": "Introduction",
                                        "children": [
                                            {
                                                "id": "v1_d2_1_2",
                                                "title": "Key Peptides in Drug Discovery"
                                            },
                                            {
                                                "id": "v1_d2_1_1",
                                                "title": "Definition of Peptidomimetics"
                                            },
                                            {
                                                "id": "v1_d2_1_21",
                                                "title": "Problems with Peptide Molecules"
                                            },
                                            {
                                                "id": "v1_d2_1_3",
                                                "title": "The Aim of Peptidomimetics"
                                            },
                                            {
                                                "id": "v1_d2_1_4",
                                                "title": "Typical Peptidomimicry Projects"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_d2_4",
                                        "title": "Two Alternative Routes",
                                        "children": [
                                            {
                                                "id": "v1_d2_4_1",
                                                "title": "From Peptides to Non-peptidic Molecules"
                                            },
                                            {
                                                "id": "v1_d2_4_2",
                                                "title": "First Route: Successive Modifications of Peptide",
                                                "children": [
                                                    {
                                                        "id": "v1_d2_4_21",
                                                        "title": "Depeptidization"
                                                    },
                                                    {
                                                        "id": "pmi_3_1",
                                                        "title": "Range of Structural Modifications"
                                                    },
                                                    {
                                                        "id": "v1_d2_2_4",
                                                        "title": "Side Chain Mimicry"
                                                    },
                                                    {
                                                        "id": "pmi_3_3",
                                                        "title": "Short-Range Cyclizations (Bridging)"
                                                    },
                                                    {
                                                        "id": "pmi_3_4",
                                                        "title": "Long Range Cyclizations"
                                                    },
                                                    {
                                                        "id": "v1_d2_2_2",
                                                        "title": "Mimicking the Peptidic Bond",
                                                        "children": [
                                                            {
                                                                "id": "v1_d2_2_3",
                                                                "title": "Browser of Bioisosteric Replacements"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "pmi_3_7",
                                                        "title": "C{alpha} Modifications",
                                                        "children": [
                                                            {
                                                                "id": "pmi_3_7_1",
                                                                "title": "Tetra Substituted Amino Acids"
                                                            },
                                                            {
                                                                "id": "pmi_3_7_2",
                                                                "title": "Azapeptides"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "pmi_3_10",
                                                        "title": "Extension of the Peptide Chain",
                                                        "children": [
                                                            {
                                                                "id": "pmi_3_10_1",
                                                                "title": "{beta}-Peptides"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "v1_d2_2_1",
                                                        "title": "Problems with Peptide-Based Analogs"
                                                    },
                                                    {
                                                        "id": "v1_d2_3_1",
                                                        "title": "Example of Reduction of Peptide Character"
                                                    },
                                                    {
                                                        "id": "v1_d2_3_2",
                                                        "title": "A-72517 is a Mimic of Angiotensinogen"
                                                    },
                                                    {
                                                        "id": "v1_d2_3_3",
                                                        "title": "Dead End in the Development of A-72517"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_d2_4_3",
                                                "title": "Second Route:De Novo Design of Non Peptide Mimics",
                                                "children": [
                                                    {
                                                        "id": "v1_d2_4_31_s1",
                                                        "title": "Operational Framework"
                                                    },
                                                    {
                                                        "id": "v1_d2_4_31_s2",
                                                        "title": "Removing Non-Essential Fragments"
                                                    },
                                                    {
                                                        "id": "v1_d2_4_31_s3",
                                                        "title": "Design of New Molecules"
                                                    },
                                                    {
                                                        "id": "v1_d2_1_3a",
                                                        "title": "Thyrotropin-Releasing Hormone (TRH) Example",
                                                        "children": [
                                                            {
                                                                "id": "v1_d2_5_1",
                                                                "title": "Ro-24-9975 is a Non-Peptidic Mimic of TRH"
                                                            },
                                                            {
                                                                "id": "v1_d2_5_2",
                                                                "title": "TRH Browser"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "v1_d2_4_4",
                                                "title": "Which Route Should be Used?"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "v1_d2_11",
                                        "title": "The Challenge of Peptidomimicry",
                                        "children": [
                                            {
                                                "id": "v1_d2_11_1",
                                                "title": "Challenges in Peptide Modifications"
                                            },
                                            {
                                                "id": "v1_d2_11_2",
                                                "title": "Challenges in Non-Peptidic Mimicry"
                                            },
                                            {
                                                "id": "v1_d2_11_3",
                                                "title": "Perspectives in Peptidomimetics"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "peptido_quiz",
                                        "title": "CHAPTER QUIZZES",
                                        "children": [
                                            {
                                                "id": "peptido_quiz1",
                                                "title": "Quiz 1"
                                            },
                                            {
                                                "id": "peptido_quiz2",
                                                "title": "Quiz 2"
                                            },
                                            {
                                                "id": "peptido_quiz3",
                                                "title": "Quiz 3"
                                            },
                                            {
                                                "id": "peptido_quiz4",
                                                "title": "Quiz 4"
                                            },
                                            {
                                                "id": "peptido_quiz5",
                                                "title": "Quiz 5"
                                            },
                                            {
                                                "id": "peptido_quiz6",
                                                "title": "Quiz 6"
                                            },
                                            {
                                                "id": "peptido_quiz7",
                                                "title": "Quiz 7"
                                            },
                                            {
                                                "id": "peptido_quiz8",
                                                "title": "Quiz 8"
                                            },
                                            {
                                                "id": "peptido_quiz9",
                                                "title": "Quiz 9"
                                            },
                                            {
                                                "id": "peptido_quiz10",
                                                "title": "Quiz 10"
                                            },
                                            {
                                                "id": "peptido_quiz11",
                                                "title": "Quiz 11"
                                            },
                                            {
                                                "id": "peptido_quiz12",
                                                "title": "Quiz 12"
                                            },
                                            {
                                                "id": "peptido_quiz13",
                                                "title": "Quiz 13"
                                            },
                                            {
                                                "id": "peptido_quiz14",
                                                "title": "Quiz 14"
                                            },
                                            {
                                                "id": "peptido_quiz15",
                                                "title": "Quiz 15"
                                            },
                                            {
                                                "id": "peptido_quiz16",
                                                "title": "Quiz 16"
                                            },
                                            {
                                                "id": "peptido_quiz17",
                                                "title": "Quiz 17"
                                            },
                                            {
                                                "id": "peptido_quiz18",
                                                "title": "Quiz 18"
                                            },
                                            {
                                                "id": "peptido_quiz19",
                                                "title": "Quiz 19"
                                            },
                                            {
                                                "id": "peptido_quiz20",
                                                "title": "Quiz 20"
                                            },
                                            {
                                                "id": "peptido_quiz21",
                                                "title": "Quiz 21"
                                            },
                                            {
                                                "id": "peptido_quiz22",
                                                "title": "Quiz 22"
                                            },
                                            {
                                                "id": "peptido_quiz23",
                                                "title": "Quiz 23"
                                            },
                                            {
                                                "id": "peptido_quiz24",
                                                "title": "Quiz 24"
                                            },
                                            {
                                                "id": "peptido_quiz25",
                                                "title": "Quiz 25"
                                            },
                                            {
                                                "id": "peptido_quiz26",
                                                "title": "Quiz 26"
                                            },
                                            {
                                                "id": "peptido_quiz27",
                                                "title": "Quiz 27"
                                            },
                                            {
                                                "id": "peptido_quiz28",
                                                "title": "Quiz 28"
                                            },
                                            {
                                                "id": "peptido_quiz29",
                                                "title": "Quiz 29"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "advanced_analog_design",
                                "title": "Case Studies in Advanced Analog Design",
                                "dateCreated": "080601",
                                "isFinal": "T"
                            },
                            {
                                "id": "3d_mimic_case",
                                "title": "Case Studies in 3D Mimic Design",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "peptidoex",
                                "title": "Case Studies in Peptidomimetics",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "librarydesignvolume",
                        "title": "Synthesis and Library Design",
                        "children": [
                            {
                                "id": "synthesis_drugs",
                                "title": "Synthesis of Drugs",
                                "dateCreated": "050915",
                                "isFinal": "T"
                            },
                            {
                                "id": "librarydesign",
                                "title": "Library Design",
                                "dateCreated": "040901",
                                "isFinal": "T"
                            },
                            {
                                "id": "combichem",
                                "title": "Combinatorial Chemistry",
                                "dateCreated": "040901",
                                "isFinal": "F"
                            },
                            {
                                "id": "library_design_case",
                                "title": "Case Studies in Library Design",
                                "dateCreated": "081028",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "adme_prediction_volume",
                        "title": "ADME Properties and Predictions",
                        "children": [
                            {
                                "id": "pharmacokinetics",
                                "title": "ADME Properties",
                                "dateCreated": "040420",
                                "isFinal": "T"
                            },
                            {
                                "id": "adme_predict",
                                "title": "ADME Predictions",
                                "dateCreated": "040420",
                                "isFinal": "F"
                            },
                            {
                                "id": "adme_case",
                                "title": "Case Studies in ADME\/Tox Predictions",
                                "dateCreated": "100830",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "ProteinStructureandModeling",
                        "title": "Protein Structure and Modeling",
                        "children": [
                            {
                                "id": "sbi",
                                "title": "Structural Bioinformatics",
                                "dateCreated": "080120",
                                "isFinal": "T"
                            },
                            {
                                "id": "proteinstructure",
                                "title": "Protein Structure",
                                "dateCreated": "040404",
                                "isFinal": "T"
                            },
                            {
                                "id": "homology_in_development",
                                "title": "Homology Modeling",
                                "dateCreated": "070404",
                                "isFinal": "T"
                            },
                            {
                                "id": "moldynamics",
                                "title": "Molecular Dynamics",
                                "dateCreated": "060901",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "structure-based drug design",
                        "title": "Structure-Based Design",
                        "children": [
                            {
                                "id": "structureanalysis",
                                "title": "Introduction to Protein-Ligand Binding",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "structuredesign",
                                "title": "Principles of Structure-Based Design",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "docking",
                                "title": "Molecular Docking: Principles and Methods",
                                "dateCreated": "070915",
                                "isFinal": "T"
                            },
                            {
                                "id": "sbdd_case",
                                "title": "Case Studies in Structure-Based Design",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "docking_case",
                                "title": "Case Studies of Docking in Drug Discovery",
                                "dateCreated": "090101",
                                "isFinal": "T"
                            },
                            {
                                "id": "structureex",
                                "title": "Analyses of Protein-Ligand Complexes",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "database_searching_volume",
                        "title": "Cheminformatics",
                        "children": [
                            {
                                "id": "cheminfo",
                                "title": "Cheminformatics: Principles and Applications",
                                "dateCreated": "080601",
                                "isFinal": "T"
                            },
                            {
                                "id": "molencoding",
                                "title": "Encoding Molecules",
                                "dateCreated": "090101",
                                "isFinal": "T"
                            },
                            {
                                "id": "3d_database_searching",
                                "title": "3D Database Searching",
                                "dateCreated": "040301",
                                "isFinal": "T"
                            },
                            {
                                "id": "msimilarity",
                                "title": "Molecular Similarity",
                                "dateCreated": "060120",
                                "isFinal": "T"
                            },
                            {
                                "id": "denovo",
                                "title": "De-Novo Design",
                                "dateCreated": "071220",
                                "isFinal": "F"
                            },
                            {
                                "id": "3ddatabaseex",
                                "title": "Case Studies in 3D Database Searching",
                                "dateCreated": "060510",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "Pharmacophorebaseddrugdesign",
                        "title": "Ligand-Based Design",
                        "children": [
                            {
                                "id": "pharmaanalysis",
                                "title": "Principles in Pharmacophore Elucidation",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "pharmadesign",
                                "title": "Ligand-Based Approaches",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "pharmaex",
                                "title": "Examples of Pharmacophores",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "ligand_based_case",
                                "title": "Case Studies in Ligand-Based Design",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "qsar_volume",
                        "title": "QSAR and Chemometrics",
                        "children": [
                            {
                                "id": "qsar",
                                "title": "QSAR: Principles and Methods",
                                "dateCreated": "040420",
                                "isFinal": "T"
                            },
                            {
                                "id": "3d_qsar",
                                "title": "3D-QSAR: Principles and Methods",
                                "dateCreated": "050220",
                                "isFinal": "T"
                            },
                            {
                                "id": "qsar_case",
                                "title": "Case Studies in QSAR and 3D-QSAR",
                                "dateCreated": "050220",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "MolecularModeling",
                        "title": "Molecular Basis of Drugs",
                        "children": [
                            {
                                "id": "mgeometry",
                                "title": "Molecular Geometry",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "mproperties",
                                "title": "Molecular Properties",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "stereochemistry",
                                "title": "Stereochemistry",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "menergies",
                                "title": "Molecular Energies",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "confanalysis",
                                "title": "Conformational Analysis",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "mgraphics",
                                "title": "Molecular Graphics",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "confanalysisex",
                                "title": "Selected Examples in 3D Analysis",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            }
                        ]
                    },
                    {
                        "id": "General_topics_volume",
                        "title": "General Topics",
                        "children": [
                            {
                                "id": "drugintro",
                                "title": "General Introduction to Drugs",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "drugdiscovery",
                                "title": "Drug Discovery",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "drugdevelop",
                                "title": "Drug Development",
                                "dateCreated": "020801",
                                "isFinal": "T"
                            },
                            {
                                "id": "drug_stories_old",
                                "title": "Old Drug Story",
                                "dateCreated": "050801",
                                "isFinal": "F"
                            },
                            {
                                "id": "tmp_claude",
                                "title": "Claude Fourtout",
                                "dateCreated": "050801",
                                "isFinal": "F"
                            },
                            {
                                "id": "tmp_elie",
                                "title": "Elie Fourtout",
                                "dateCreated": "050801",
                                "isFinal": "F"
                            },
                            {
                                "id": "casestudies",
                                "title": "Old draft: Cases Studies in Drug Discovery",
                                "dateCreated": "050801",
                                "isFinal": "F"
                            },
                            {
                                "id": "psp",
                                "title": "Protein Structure Prediction",
                                "dateCreated": "110609",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "psp_1",
                                        "title": "Introduction to Protein Structure Prediction",
                                        "children": [
                                            {
                                                "id": "psp_1_1",
                                                "title": "Protein Structure Prediction"
                                            },
                                            {
                                                "id": "psp_1_2",
                                                "title": "The Amino Acid Sequence of a Protein Dictates its 3D Structure"
                                            },
                                            {
                                                "id": "psp_1_3",
                                                "title": "The Protein Folding Problem"
                                            },
                                            {
                                                "id": "psp_1_4",
                                                "title": "From the Protein Sequence to its Function"
                                            },
                                            {
                                                "id": "psp_1_5",
                                                "title": "Filling the Gap between Sequence Data and 3D Data"
                                            },
                                            {
                                                "id": "psp_1_6",
                                                "title": "Approaches to Structure Prediction",
                                                "children": [
                                                    {
                                                        "id": "psp_1_6_1",
                                                        "title": "Ab initio Prediction Methods"
                                                    },
                                                    {
                                                        "id": "psp_1_6_2",
                                                        "title": "Template-Based Prediction Methods"
                                                    },
                                                    {
                                                        "id": "psp_1_6_3",
                                                        "title": "Hybrid Methods"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "psp_2",
                                        "title": "Ab initio Prediction Methods",
                                        "children": [
                                            {
                                                "id": "psp_2_1",
                                                "title": "Background"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "psp_3",
                                        "title": "Template-Based Prediction Methods",
                                        "children": [
                                            {
                                                "id": "psp_3_1",
                                                "title": "Template-Based Prediction Method"
                                            },
                                            {
                                                "id": "psp_3_2",
                                                "title": "Target and Template"
                                            },
                                            {
                                                "id": "psp_3_3",
                                                "title": "Categories in Template-Based Prediction Methods"
                                            },
                                            {
                                                "id": "psp_3_4",
                                                "title": "Homology Modeling"
                                            },
                                            {
                                                "id": "psp_3_5",
                                                "title": "Homology"
                                            },
                                            {
                                                "id": "psp_3_6",
                                                "title": "Homology and Sequence Similarity",
                                                "children": [
                                                    {
                                                        "id": "psp_3_6_1",
                                                        "title": "Steps in Homology Modeling"
                                                    },
                                                    {
                                                        "id": "psp_3_6_2",
                                                        "title": "Step 1: Template Search",
                                                        "children": [
                                                            {
                                                                "id": "psp_3_6_2_1",
                                                                "title": "Pairwise Sequence Comparison"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_2",
                                                                "title": "How a Pairwise Alignment is Done?",
                                                                "children": [
                                                                    {
                                                                        "id": "psp_3_6_2_2_1",
                                                                        "title": "Scoring Matrices"
                                                                    },
                                                                    {
                                                                        "id": "psp_3_6_2_2_2",
                                                                        "title": "Dynamic Programming"
                                                                    },
                                                                    {
                                                                        "id": "psp_3_6_2_2_3",
                                                                        "title": "Global or Local Alignment"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_3",
                                                                "title": "FASTA and BLAST"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_4",
                                                                "title": "The PDB, the Database for template search"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_5",
                                                                "title": "Quality Consideration in Selecting a Template"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_6",
                                                                "title": "Biological Consideration in Selecting a Template "
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_7",
                                                                "title": "Advance Template Searches"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_8",
                                                                "title": "Profile-based Methods"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_9",
                                                                "title": "PSI- BLAST"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_10",
                                                                "title": "HMM"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_11",
                                                                "title": "Pre-computed HMMs  Dataases"
                                                            },
                                                            {
                                                                "id": "psp_3_6_2_12",
                                                                "title": "Profile-Profile Methods"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "psp_3_6_3",
                                                        "title": "Step 2: Alignment",
                                                        "children": [
                                                            {
                                                                "id": "psp_3_6_3_1",
                                                                "title": "Using the Pairwise Sequence Alignment"
                                                            },
                                                            {
                                                                "id": "psp_3_6_3_2",
                                                                "title": "The Disadvantage of Pairwise Alignment"
                                                            },
                                                            {
                                                                "id": "psp_3_6_3_3",
                                                                "title": "The Advantage of Multiple Alignment"
                                                            },
                                                            {
                                                                "id": "psp_3_6_3_4",
                                                                "title": "Multiple Sequence Alignment Algorithms"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "psp_app_a",
                                        "title": "Appendix - PSP terms",
                                        "children": [
                                            {
                                                "id": "psp_app_a1",
                                                "title": "Resolution"
                                            },
                                            {
                                                "id": "psp_app_a2",
                                                "title": "R-value"
                                            },
                                            {
                                                "id": "psp_app_a3",
                                                "title": "R-free"
                                            },
                                            {
                                                "id": "psp_app_a4",
                                                "title": "Ramachandran Plot"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "homology",
                                "title": "Homology",
                                "dateCreated": "110613",
                                "isFinal": "T",
                                "children": [
                                    {
                                        "id": "hmlg_1",
                                        "title": "Protein Structure Prediction",
                                        "children": [
                                            {
                                                "id": "hmlg_1_02",
                                                "title": "Protein Structure Determines Protein Function"
                                            },
                                            {
                                                "id": "hmlg_1_01",
                                                "title": "Protein Structure Prediction"
                                            },
                                            {
                                                "id": "docking_ju8h",
                                                "title": "Why is Protein Prediction Useful?"
                                            },
                                            {
                                                "id": "hmlg_1_03",
                                                "title": "Filling the Gap Between Sequence and 3D Data",
                                                "children": [
                                                    {
                                                        "id": "hmlg_1_04",
                                                        "title": "Growth of SwissProt Database"
                                                    },
                                                    {
                                                        "id": "hmlg_1_05",
                                                        "title": "Growth of PDB Database"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_1_06",
                                                "title": "The four levels of Protein Architecture"
                                            },
                                            {
                                                "id": "hmlg_1_07",
                                                "title": "Secondary Structure Prediction",
                                                "children": [
                                                    {
                                                        "id": "hmlg_1_07_23ds",
                                                        "title": "The Need of Secondary Structure Prediction"
                                                    },
                                                    {
                                                        "id": "hmlg_1_07kl_2",
                                                        "title": "Classify a Proteins"
                                                    },
                                                    {
                                                        "id": "hmlg_1_07_2",
                                                        "title": "Methods for Secondary Structure Prediction"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_1_08",
                                                "title": "Tertiary Structure Prediction",
                                                "children": [
                                                    {
                                                        "id": "hmlg_1_0k99",
                                                        "title": "The Need of Tertiary Structure Prediction"
                                                    },
                                                    {
                                                        "id": "hmlg_1_09",
                                                        "title": "Methods of Tertiary Structure Prediction",
                                                        "children": [
                                                            {
                                                                "id": "hmlg_1_10",
                                                                "title": "Homology Modeling"
                                                            },
                                                            {
                                                                "id": "hmlg_1_11",
                                                                "title": "Fold Recognition"
                                                            },
                                                            {
                                                                "id": "hmlg_1_12",
                                                                "title": "Ab-initio"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "hmlg_1_13",
                                                        "title": "Choice of the Best Method"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_3_new",
                                        "title": "Introduction to Homology Modeling",
                                        "children": [
                                            {
                                                "id": "hmlg_e43rwrsf",
                                                "title": "Importance of 3D Protein Structure"
                                            },
                                            {
                                                "id": "hmlg_1_l9j01",
                                                "title": "Protein Structure Prediction"
                                            },
                                            {
                                                "id": "hmlg_e43rwrjhjsf",
                                                "title": "Methods for Protein Structure Prediction"
                                            },
                                            {
                                                "id": "hmlg_1llkjl_10",
                                                "title": "What is Homology Modeling?"
                                            },
                                            {
                                                "id": "hmlg_13_04",
                                                "title": "Target and Template"
                                            },
                                            {
                                                "id": "hmlg_1_1ll5",
                                                "title": "Homologous Proteins Have Similar 3D structures"
                                            },
                                            {
                                                "id": "hmlg_1_jk17",
                                                "title": "Non Uniformity of Structural Similarities"
                                            },
                                            {
                                                "id": "hmlg_1_14",
                                                "title": "Types of Homologous Proteins",
                                                "children": [
                                                    {
                                                        "id": "hmlg_1_15",
                                                        "title": "Orthologous Proteins"
                                                    },
                                                    {
                                                        "id": "hmlg_1_1o5",
                                                        "title": "Paralogous Proteins"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "chapter_subjecjh88888t_1",
                                                "title": "media sympa a utiliser"
                                            },
                                            {
                                                "id": "hmlg_erjkjwrsf",
                                                "title": "Historical Note"
                                            },
                                            {
                                                "id": "chaptiier_subjiiooioiect_1",
                                                "title": "rajouter une page sur structural genomics initiative qui se repose sur lhomology modeling"
                                            },
                                            {
                                                "id": "hmlg_13_05",
                                                "title": "Why is Homology Modeling Possible?"
                                            },
                                            {
                                                "id": "hmlg_1_jkop17",
                                                "title": "Chances to do Homology Modeling"
                                            },
                                            {
                                                "id": "hmlg_1_17",
                                                "title": "Steps of Homology Modeling",
                                                "children": [
                                                    {
                                                        "id": "hmlg_13_08",
                                                        "title": "Template Searching and Selection"
                                                    },
                                                    {
                                                        "id": "hmlg_13_09",
                                                        "title": "Target-Template Alignment"
                                                    },
                                                    {
                                                        "id": "hmlg_13_10",
                                                        "title": "Model Building"
                                                    },
                                                    {
                                                        "id": "hmlg_13_11",
                                                        "title": "Model Evaluation"
                                                    },
                                                    {
                                                        "id": "hmlg_14_12",
                                                        "title": "Model Refinement"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_sequ",
                                        "title": "Sequence Alignment Basics",
                                        "children": [
                                            {
                                                "id": "hmlg_2_0132",
                                                "title": "Sequence Alignment in Bioinformatics"
                                            },
                                            {
                                                "id": "hmlg_2_08",
                                                "title": "Sequence Alignments"
                                            },
                                            {
                                                "id": "hmlg_2_0jj8ju",
                                                "title": "Use of Sequence Gaps for Optimizing the Alignment"
                                            },
                                            {
                                                "id": "docking_jhjkgvcvbvc",
                                                "title": "Global and Local Alignment"
                                            },
                                            {
                                                "id": "hmlg_repr",
                                                "title": "Visualization of Sequence Alignment"
                                            },
                                            {
                                                "id": "hmlg_3_0ll2",
                                                "title": "Need of Computerized Alignement Methods"
                                            },
                                            {
                                                "id": "hmlg_2_14",
                                                "title": "Sequence Alignment Methods",
                                                "children": [
                                                    {
                                                        "id": "hmlg_2_15",
                                                        "title": "Pairwise Sequence-Sequence Comparison",
                                                        "children": [
                                                            {
                                                                "id": "hmlg_2_16",
                                                                "title": "FASTA"
                                                            },
                                                            {
                                                                "id": "hmlg_2_17",
                                                                "title": "BLAST",
                                                                "children": [
                                                                    {
                                                                        "id": "hmlg_2_17_2",
                                                                        "title": "Types of BLAST"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "hmlg_3_02",
                                                                "title": "[mathematic algorihtm]Sequence Alignment Methods",
                                                                "children": [
                                                                    {
                                                                        "id": "hmlg_3_03",
                                                                        "title": "Dynamic Programming"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "hmlg_2_18",
                                                        "title": "Multiple Sequence Comparisons",
                                                        "children": [
                                                            {
                                                                "id": "hmlg_2_19",
                                                                "title": "MSA Profile",
                                                                "children": [
                                                                    {
                                                                        "id": "hmlg_2_20",
                                                                        "title": "PSSM (Position Specific Scoring Matrices)"
                                                                    },
                                                                    {
                                                                        "id": "hmlg_2_20_2",
                                                                        "title": "HMM (Hidden Markov Model)"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "hmlg_2_21",
                                                                "title": "Profile-Based Searches",
                                                                "children": [
                                                                    {
                                                                        "id": "hmlg_2_22",
                                                                        "title": "PSI-Blast"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "hmlg_3_04",
                                                                "title": "Aligning Multiple Sequences",
                                                                "children": [
                                                                    {
                                                                        "id": "hmlg_3_05",
                                                                        "title": "Progressive Approach"
                                                                    },
                                                                    {
                                                                        "id": "hmlg_3_06",
                                                                        "title": "Iterative Approach"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "hmlg_2_23",
                                                        "title": "Sequence-Structure Comparisons"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_2_0l9",
                                                "title": "Scoring the Alignment",
                                                "children": [
                                                    {
                                                        "id": "hmlg_2_10kl8",
                                                        "title": "Assessing the Significance of Alignments"
                                                    },
                                                    {
                                                        "id": "hmlg_2_10kl8f",
                                                        "title": "Scoring Function"
                                                    },
                                                    {
                                                        "id": "hmlg_2_10",
                                                        "title": "Alignment Scoring Matrices"
                                                    },
                                                    {
                                                        "id": "hmlg_2_11",
                                                        "title": "PAM Matrices"
                                                    },
                                                    {
                                                        "id": "hmlg_2_12",
                                                        "title": "BLOSUM Matrices"
                                                    },
                                                    {
                                                        "id": "hmlg_2_13",
                                                        "title": "Aims to maximuize the overall allignment scoring"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_2",
                                        "title": "Step 1: Identify Related 3D Structures",
                                        "children": [
                                            {
                                                "id": "hmlg_2_01",
                                                "title": "Identify Related Proteins with Known 3D"
                                            },
                                            {
                                                "id": "hmlg_2_1k4",
                                                "title": "Sequence Alignment Methods",
                                                "children": [
                                                    {
                                                        "id": "hmlg_2_1k5",
                                                        "title": "Pairwise Sequence-Sequence Comparison"
                                                    },
                                                    {
                                                        "id": "hmlg_2_1k8",
                                                        "title": "Multiple Sequence Comparisons",
                                                        "children": [
                                                            {
                                                                "id": "hmlg_2_1k9",
                                                                "title": "MSA Profile"
                                                            },
                                                            {
                                                                "id": "hmlg_2_2k1",
                                                                "title": "Profile-Based Searches"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "hmlg_2_2iu3",
                                                        "title": "Sequence-Structure Comparisons"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_2_03",
                                                "title": "Protein Structure Databases",
                                                "children": [
                                                    {
                                                        "id": "hmlg_2_04",
                                                        "title": "PDB"
                                                    },
                                                    {
                                                        "id": "hmlg_2_05",
                                                        "title": "CATH"
                                                    },
                                                    {
                                                        "id": "hmlg_2_06",
                                                        "title": "SCOP"
                                                    },
                                                    {
                                                        "id": "hmlg_2_07",
                                                        "title": "DALI"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_2_08ju",
                                                "title": "Which Method to Use?"
                                            },
                                            {
                                                "id": "hmlg_2_24",
                                                "title": "Selection of Best Related Structures"
                                            },
                                            {
                                                "id": "hmlg_2_09",
                                                "title": "Scoring the Alignment"
                                            },
                                            {
                                                "id": "hmlg_2_25",
                                                "title": "Other Important Criteria"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_3",
                                        "title": "Step 2: Target-Template Alignment",
                                        "children": [
                                            {
                                                "id": "hmlg_3_01",
                                                "title": "Target-Template Alignment"
                                            },
                                            {
                                                "id": "hmlg_3_07",
                                                "title": "Improving the Target-Template Alignment"
                                            },
                                            {
                                                "id": "hmlg_3_08",
                                                "title": "Significance of Target-Template Alignment"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_4",
                                        "title": "Step 3: Model Building",
                                        "children": [
                                            {
                                                "id": "hmlg_4_01",
                                                "title": "Model Building"
                                            },
                                            {
                                                "id": "hmlg_4_02",
                                                "title": "Modeling by Assembly of Rigid Bodies",
                                                "children": [
                                                    {
                                                        "id": "hmlg_4_03",
                                                        "title": "Steps of Modeling by Assembly of Rigid Bodies"
                                                    },
                                                    {
                                                        "id": "hmlg_4_04",
                                                        "title": "Structurally Conserved and Variable Regions (SCRs {and} SVRs)"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_4_05",
                                                "title": "Modeling by Segment Matching\/Coordinate Reconstruction"
                                            },
                                            {
                                                "id": "hmlg_4_06",
                                                "title": "Modeling by Satisfaction of Spatial Restraints",
                                                "children": [
                                                    {
                                                        "id": "hmlg_4_07",
                                                        "title": "Steps of Modeling by Satisfaction of Spatial Constraints"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_4_08",
                                                "title": "Loop Modeling",
                                                "children": [
                                                    {
                                                        "id": "hmlg_4_09",
                                                        "title": "Methods for Loop Modeling"
                                                    },
                                                    {
                                                        "id": "hmlg_4_10",
                                                        "title": "Database Search"
                                                    },
                                                    {
                                                        "id": "hmlg_4_11",
                                                        "title": "Limitations of Database Search for Loop Modeling"
                                                    },
                                                    {
                                                        "id": "hmlg_4_12",
                                                        "title": "Conformational Search"
                                                    },
                                                    {
                                                        "id": "hmlg_4_13",
                                                        "title": "Optimization Algorithms"
                                                    },
                                                    {
                                                        "id": "hmlg_4_14",
                                                        "title": "Combined Methods"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_4_15",
                                                "title": "Side-Chain Modeling",
                                                "children": [
                                                    {
                                                        "id": "hmlg_4_16",
                                                        "title": "Representation of Side-Chains"
                                                    },
                                                    {
                                                        "id": "hmlg_4_17",
                                                        "title": "Side-Chain Conformations: Rotamers"
                                                    },
                                                    {
                                                        "id": "hmlg_4_18",
                                                        "title": "Rotamer Library"
                                                    },
                                                    {
                                                        "id": "hmlg_4_19",
                                                        "title": "Approximations of Side-Chain Modeling"
                                                    },
                                                    {
                                                        "id": "hmlg_4_20",
                                                        "title": "Energy Function for Side Chain Modeling"
                                                    },
                                                    {
                                                        "id": "hmlg_4_21",
                                                        "title": "Search Algorithms in Side Chain Conformational Space"
                                                    },
                                                    {
                                                        "id": "hmlg_4_22",
                                                        "title": "Monte Carlo"
                                                    },
                                                    {
                                                        "id": "hmlg_4_23",
                                                        "title": "Dead End Elimination (DEE)"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_5",
                                        "title": "Step 4: Model Evaluation",
                                        "children": [
                                            {
                                                "id": "hmlg_5_02",
                                                "title": "Model Evaluation"
                                            },
                                            {
                                                "id": "hmlg_5_03",
                                                "title": "Accuracy of Comparative Models"
                                            },
                                            {
                                                "id": "hmlg_5_04",
                                                "title": "Errors in Comparative Models",
                                                "children": [
                                                    {
                                                        "id": "hmlg_5_05",
                                                        "title": "Side Chain Packing Errors"
                                                    },
                                                    {
                                                        "id": "hmlg_5_06",
                                                        "title": "Distortions and Shifts in Correctly Aligned Regions"
                                                    },
                                                    {
                                                        "id": "hmlg_5_07",
                                                        "title": "Error in Regions without a Template"
                                                    },
                                                    {
                                                        "id": "hmlg_5_08",
                                                        "title": "Errors Due to Misalignments"
                                                    },
                                                    {
                                                        "id": "hmlg_5_09",
                                                        "title": "Selection of Incorrect Templates"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_5_10",
                                                "title": "Methods of Model Evaluation",
                                                "children": [
                                                    {
                                                        "id": "hmlg_5_11",
                                                        "title": "Assessing the Stereochemistry"
                                                    },
                                                    {
                                                        "id": "hmlg_5_12",
                                                        "title": "Assessing the Stereochemistry: WHATCHECK"
                                                    },
                                                    {
                                                        "id": "hmlg_5_13",
                                                        "title": "Assessing the Stereochemistry: PROCHECK"
                                                    },
                                                    {
                                                        "id": "hmlg_5_14",
                                                        "title": "Assessing the Fold"
                                                    },
                                                    {
                                                        "id": "hmlg_5_15",
                                                        "title": "Assessing the fold: Verify3D"
                                                    },
                                                    {
                                                        "id": "hmlg_5_16",
                                                        "title": "Assessing the fold: ProsaII"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_6",
                                        "title": "Step 5: Model Refinement",
                                        "children": [
                                            {
                                                "id": "hmlg_6_01",
                                                "title": "Model Refinement"
                                            },
                                            {
                                                "id": "hmlg_6_02",
                                                "title": "Potential Energy Function",
                                                "children": [
                                                    {
                                                        "id": "hmlg_6_03",
                                                        "title": "Stretching Energy"
                                                    },
                                                    {
                                                        "id": "hmlg_6_04",
                                                        "title": "Bending Energy"
                                                    },
                                                    {
                                                        "id": "hmlg_6_05",
                                                        "title": "Torsion Energy"
                                                    },
                                                    {
                                                        "id": "hmlg_6_06",
                                                        "title": "Non-Bonded Energy (van der Waals {and} Electrostatic)"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_6_07",
                                                "title": "Molecular Dynamics"
                                            },
                                            {
                                                "id": "hmlg_6_08",
                                                "title": "Optimization Procedures",
                                                "children": [
                                                    {
                                                        "id": "hmlg_6_09",
                                                        "title": "Steepest Descent"
                                                    },
                                                    {
                                                        "id": "hmlg_6_10",
                                                        "title": "Conjugate Gradient"
                                                    },
                                                    {
                                                        "id": "hmlg_6_11",
                                                        "title": "Newton-Raphson"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_7",
                                        "title": "Assessment of Structure Prediction",
                                        "children": [
                                            {
                                                "id": "hmlg_7_01",
                                                "title": "Assessment of Structure Prediction"
                                            },
                                            {
                                                "id": "hmlg_7_02",
                                                "title": "CASP"
                                            },
                                            {
                                                "id": "hmlg_7_03",
                                                "title": "CAFASP"
                                            },
                                            {
                                                "id": "hmlg_7_04",
                                                "title": "Eva-CM"
                                            },
                                            {
                                                "id": "hmlg_7_05",
                                                "title": "LiveBench"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_8",
                                        "title": "Applications of Homology Modeling",
                                        "children": [
                                            {
                                                "id": "hmlg_8_01",
                                                "title": "Applications"
                                            },
                                            {
                                                "id": "hmlg_8_02",
                                                "title": "Low Accuracy Models"
                                            },
                                            {
                                                "id": "hmlg_8_03",
                                                "title": "Medium Accuracy Models"
                                            },
                                            {
                                                "id": "hmlg_8_04",
                                                "title": "High Accuracy Models"
                                            },
                                            {
                                                "id": "hmlg_8_05",
                                                "title": "Testing a Hypothesis About Protein Function",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_06",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_07",
                                                "title": "Identifying Active and Binding Sites",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_08",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_09",
                                                "title": "Identifying Ligands for a Given Binding Site",
                                                "children": [
                                                    {
                                                        "id": "hmlg_08_10",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_11",
                                                "title": "Modeling Substrate Specificity",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_12",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_13",
                                                "title": "Modeling Antigenic Epitopes",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_14",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_15",
                                                "title": "Facilitating Molecular Replacement in X-ray Structure Determination",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_16",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_17",
                                                "title": "Refining Models Based on NMR Constraints",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_18",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_19",
                                                "title": "Finding Remote Structural Homologs: Case Study"
                                            },
                                            {
                                                "id": "hmlg_8_20",
                                                "title": "Modeling Protein-Protein Interactions",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_21",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_22",
                                                "title": "Application in Structure-Based Drug Discovery",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_23",
                                                        "title": "Case Study 1"
                                                    },
                                                    {
                                                        "id": "hmlg_8_24",
                                                        "title": "Case Study 2"
                                                    },
                                                    {
                                                        "id": "hmlg_8_25",
                                                        "title": "Case Study 3"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_8_26",
                                                "title": "Application in Structural Genomics",
                                                "children": [
                                                    {
                                                        "id": "hmlg_8_27",
                                                        "title": "Case Study"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_9",
                                        "title": "A Practical Example of Homology Modeling",
                                        "children": [
                                            {
                                                "id": "hmlg_9_01",
                                                "title": "MODELLER (http:\/\/www.salilab.org\/modeller\/)"
                                            },
                                            {
                                                "id": "hmlg_9_02",
                                                "title": "Step I: Obtain the sequence of BLBP in a Format Readable by MODELLER"
                                            },
                                            {
                                                "id": "hmlg_9_03",
                                                "title": "Step II: Search for Templates"
                                            },
                                            {
                                                "id": "hmlg_9_04",
                                                "title": "Step III: Selecting a Template"
                                            },
                                            {
                                                "id": "hmlg_9_05",
                                                "title": "Step IV: Aligning BLBP to 1hms Template"
                                            },
                                            {
                                                "id": "hmlg_9_06",
                                                "title": "Output Alignment Files"
                                            },
                                            {
                                                "id": "hmlg_9_07",
                                                "title": "Building the Model of BLBP"
                                            },
                                            {
                                                "id": "hmlg_9_08",
                                                "title": "PROSAII Evaluation of the Model"
                                            },
                                            {
                                                "id": "hmlg_9_09",
                                                "title": "PROCHECK Evaluation of the Model"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_10",
                                        "title": "Homology Modeling Resources",
                                        "children": [
                                            {
                                                "id": "hmlg_10_01",
                                                "title": "Databases"
                                            },
                                            {
                                                "id": "hmlg_10_02",
                                                "title": "Template Search Resources"
                                            },
                                            {
                                                "id": "hmlg_10_03",
                                                "title": "Target-Template Alignment Resources"
                                            },
                                            {
                                                "id": "hmlg_10_04",
                                                "title": "Modeling Programs"
                                            },
                                            {
                                                "id": "hmlg_10_05",
                                                "title": "Model Evaluation Resources"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_11",
                                        "title": "Future Perspectives",
                                        "children": [
                                            {
                                                "id": "hmlg_11_01",
                                                "title": "Future Perspectives"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "hmlg_12",
                                        "title": "## SANCHEZ ---",
                                        "children": [
                                            {
                                                "id": "hmlg_13",
                                                "title": "## Protein Structure Prediction"
                                            },
                                            {
                                                "id": "hmlg_13_01",
                                                "title": "## Methods of Protein Structure Prediction",
                                                "children": [
                                                    {
                                                        "id": "hmlg_13_02",
                                                        "title": "## Ab initio Methods"
                                                    },
                                                    {
                                                        "id": "hmlg_13_03",
                                                        "title": "## Comparative Modeling Methods"
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "hmlg_13_06",
                                                "title": "## Why is Comparative Modeling Useful?"
                                            },
                                            {
                                                "id": "hmlg_13_07",
                                                "title": "## Steps in Comparative Protein Structure Modeling"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
}]);
