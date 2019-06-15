var ex1 = new Vue({
  el: '#example-1',
  data: {
    right: 0,
    wrong: 0,
    words: [['abstract, abstain, aversion', 1], ['acrid, acrimony, exacerbate', 1], ['audible, audience, auditorium', 1], ['benefit, benign, benefactor', 1], ['abbreviate, brief', 1], ['circus, circulate', 1], ['dictate, edict, dictionary', 1], ['deduce, produce, educate', 1], ['founder, foundation, funding', 1], ['gene, generate, generous', 1], ['ability, exhibit, inhabit', 1], ['jury, justice, justify', 1], ['levitate, elevate, leverage', 1], ['logic, apologize, analogy', 1], ['lucid, illuminate, translucent', 1], ['manual, manicure, manipulate', 1], ['missile, transmit, permit', 1], ['omnivorous, omnipotent, omniscent', 1], ['pacify, pacific, pacifist', 1], ['export, import, important', 1], ['tranquil, requiem, acquit', 1], ['script, proscribe, describe', 1], ['sensitive, sentient, resent', 1], ['terrain, territory, extraterrestrial', 1], ['timid, timorous', 1], ['vacuum, vacate, evacuate', 1], ['video, vivid, invisible', 1],
    ['antibacterial, antidote, antithesis', 0], ['asteroid, astronomy, astronaut', 0], ['aquarium, aquatic, aqualung', 0], ['automatic, automate, autobiograph', 0], ['bibliography, bibliophile', 0], ['biography, biology, biodegradable', 0], ['monochromatic, phytochrome', 0], ['chronic, synchronize, chronicle', 0], ['document, docile, doctrinal', 0], ['dynasty, dynamic, dynamite', 0], ['geography, geology, geometry', 0], ['agnostic, acknowledge', 0], ['autograph, graphic, demographic', 0], ['dehydrate, hydrant, hydropower', 0], ['kinetic, photokinesis', 0], ['astrology, biology, theologian', 0], ['narcotic, narcolepsy', 0], ['empathy, pathetic, apathy', 0], ['philosophy, bibliophile, philanthropy', 0], ['microphone, phonograph, telephone', 0], 
    ['photograph, photocopy, photon', 0], ['scheme, schematic', 0], 
    ['synthetic, photosynthesis', 0], ['telescope, telepathy, television', 0], 
    ['heliotrope, tropical', 0]].sort(() => Math.random() - 0.5)
  }
})
