
var questions = [
  {
    question: "What do you need to mine gold ore?", 
    answer: "b",
    options: ["Diamond Axe", "Iron Pickaxe", "Stone Shovel", "Gold Pickaxe"]
  },
  {
    question: "Which of these is not a villager profession?",
    answer: "c",
    options: ["Farmer", "Blacksmith", "Lumberjack", "Nitwit"]
  },
  {
    question: "Which of these dye colors is not in Minecraft?", 
    answer: "a",
    options: ["Indigo", "Lime Green", "Magenta", "Cyan"]
  },
  {
    question: "How many bosses are in Minecraft?", 
    answer: "c",
    options: ["There are no bosses in Minecraft", "1", "2", "3"]  
  },
  {
    question: "Which crop can't be bonemealed?", 
    answer: "d",
    options: ["Melons", "Netherwart", "Cocoa Beans", "Sugar Cane"]
  },
  {
    question: "How many bites can you take out of cake?", 
    answer: "d",
    options: ["4", "1", "8", "7"]
  },
  {
    question: "Which is these is not a potion modifier?", 
    answer: "a",
    options: ["String", "Gunpowder", "Fermented Spider Eye", "Redstone"]
  },
  {
    question: "Which piece of armor can you put the Aqua Affinity enchantment on?", 
    answer: "c",
    options: ["Chestplate", "Boots", "Helmet", "Leggings"]
  }
];


$.each(questions, function(x, y) {
  console.log(questions[x].question);
  $.each(questions[x].options, function(i, j) {
    console.log(j);
  })
  console.log("-----------------");
});