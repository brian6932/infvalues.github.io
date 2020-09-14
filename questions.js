questions =  [
    {"id": 0, "question": "Corporations should be a dominant ruling force.", "effects": {"cap": 2}},
    {"id": 1, "question": "Inheritance is a legitimate form of wealth.", "effects": {"cap": 1}},
    {"id": 2, "question": "Capitalism is the most successful and beneficial economic system yet.", "effects": {"cap": 1}},
    {"id": 3, "question": "The means of production should belong to the workers.", "effects": {"cap": -1}},
    {"id": 4, "question": "Basic utilities like roads and electricity should be publicly owned.", "effects": {"cap": -1, "ptax": 1}},
    {"id": 5, "question": "A community should suffer the gains and loss toghether.", "effects": {"cap": -1}},
    {"id": 6, "question": "A strong and large government is the best for society.", "effects": {"auth": 1}},
    {"id": 7, "question": "Even when protesting an authoritarian government, violence cannot be accepted.", "effects": {"auth": 1}},
    {"id": 8, "question": "Law and Order is more important than freedom and liberty.", "effects": {"auth": 1}},    
    {"id": 9, "question": "If a state exists, its size should be minimized.", "effects": {"auth": -1}},
    {"id": 10, "question": "The government should stay out of people's daily lives.", "effects": {"auth": -1}},
    {"id": 11, "question": "The existence of the state itself is a threat to our liberty.", "effects": {"auth": -1}},
    {"id": 12, "question": "Autocracy is better than Liberal Democracy.", "effects": {"auth": 1}},
    {"id": 12, "question": "It's important to prioritize our nation's interests over the rest of the world.", "effects": {"nat": 1}},
    {"id": 13, "question": "My nation is great.", "effects": {"nat": 1}},
    {"id": 14, "question": "Wars do not need to be justified towards other countries.", "effects": {"nat": 1}},
    {"id": 15, "question": "Nationalism is a selfish and evil ideology.", "effects": {"nat": -1}},
    {"id": 16, "question": "We should try to avoid wars and conflicts as much as possible.", "effects": {"nat": -1}},
    {"id": 17, "question": "A global country will be great for humanity.", "effects": {"nat": -1}},
    {"id": 18, "question": "Maintaining culture is very important.", "effects": {"trad": 1}},
    {"id": 19, "question": "We should maintain traditional values as much as possible.", "effects": {"trad": 1}},
    {"id": 20, "question": "We should not chase progress.", "effects": {"trad": 1}},
    {"id": 21, "question": "Society should be changed or reformed.", "effects": {"trad": -1}},
    {"id": 22, "question": "I support the LGBT community.", "effects": {"trad": -1}},
    {"id": 23, "question": "Progression is vital to human society.", "effects": {"trad": -1}},
    {"id": 24, "question": "The progression of technology has mostly been beneficial.", "effects": {"acc": 1}},
    {"id": 25, "question": "Developing advanced technology is the best way to solve climate change.", "effects": {"acc": 1}},
    {"id": 26, "question": "Life is harder and generally worse than it is a few decades ago.", "effects": {"acc": -1}},
    {"id": 27, "question": "Technological development should be slowed down.", "effects": {"acc": -1}},
    {"id": 28, "question": "Letting technology develop too much is very dangerous.", "effects": {"acc": -1}},
    {"id": 29, "question": "A God or a higher being exists.", "effects": {"relig": 1}},
    {"id": 30, "question": "My religion should be spread as much as possible.", "effects": {"relig": 1}},
    {"id": 31, "question": "I consider myself religious.", "effects": {"relig": 1}},
    {"id": 32, "question": "A religious government should be put in place.", "effects": {"relig": 1}},
    {"id": 33, "question": "Churches or other religious organization should be taxed as much as other organizations are.", "effects": {"relig": -1}},
    {"id": 34, "question": "My political ideas are fundementally different from the status quo.", "effects": {"rad": 1}},
    {"id": 35, "question": "A certain amount of violence is required in order to establish my ideology.", "effects": {"rad": 1}},
    {"id": 36, "question": "My ideology is 'mainstream'.", "effects": {"rad": -1}},
    {"id": 37, "question": "My political ideas can be established through small reforms.", "effects": {"rad": -1}},
    {"id": 38, "question": "Protests should be as peaceful as possible.", "effects": {"nonv": 1}},
    {"id": 39, "question": "Agression brings more negatives than positive.", "effects": {"nonv": 1}},
    {"id": 40, "question": "Violence is sometimes unavoidable in order to acheive real change.", "effects": {"nonv": -1}},
    {"id": 41, "question": "Experts and intellegent people should rule this country.", "effects": {"noo": 1}},
    {"id": 42, "question": "Democracy is unstable and easily corruptable.", "effects": {"noo": 1}},
    {"id": 43, "question": "Being suitable is more important than being popular for a leader.", "effects": {"noo": 1}},
    {"id": 44, "question": "Democracy is the least worse systsem of government.", "effects": {"noo": -1}},
    {"id": 45, "question": "If computers become smarter than humans, computers should rule.", "effects": {"noo": 1}},
    {"id": 46, "question": "Kakistocracy is a good system.", "effects": {"noo": -1}},
    {"id": 47, "question": "If a ruling body exists, it should be chosen by the people.", "effects": {"const": -1}},
    {"id": 48, "question": "A representative democracy is preferable to a direct democracy.", "effects": {"const": 1}},
    {"id": 49, "question": "Strong leaderships maximizes the effiency of a nation.", "effects": {"const": 1}},
    {"id": 50, "question": "The best ideology is different for every nation.", "effects": {"inter": -1}},
    {"id": 51, "question": "Tyrannical governments should be toppled.", "effects": {"inter": -1}},
    {"id": 52, "question": "Intervention is generally beneficial.", "effects": {"inter": 1}},
    {"id": 53, "question": "Globalization is inevitable, and it nust be embraced.", "effects": {"inter": 1}},
    {"id": 54, "question": "If certain people migrated into our countries, it's important for them to assimilate into our culture.", "effects": {"assi": 1}},
    {"id": 55, "question": "Each ethnicity should stay in their own communities.", "effects": {"assi": 1}},
    {"id": 56, "question": "It's important to be diverse at all times.", "effects": {"assi": -1}},
    {"id": 57, "question": "Race and ethnicity shouldn't matter.", "effects": {"assi": -1}},
    {"id": 58, "question": "Staying realistic is very important.", "effects": {"prag": 1}},
    {"id": 59, "question": "Extraordinary claims require extraordinary evidence.", "effects": {"prag": 1}},
    {"id": 60, "question": "We need to be more open towards radical ideas.", "effects": {"prag": -1}},
    {"id": 61, "question": "We should strive towards a utopian society.", "effects": {"prag": -1}},
    {"id": 62, "question": "Selfishness is a negative trait.", "effects": {"prud": 1}},
    {"id": 63, "question": "Working for the community is more important than finding happiness.", "effects": {"prud": 1}},
    {"id": 64, "question": "Everybody should be able to do what ever they want to do.", "effects": {"prud": -1}},
    {"id": 65, "question": "The most meaningful times spent are times when you do things in your own interest.", "effects": {"prud": -1}},
    {"id": 66, "question": "The freedom of businesses is the best way society can prosper.", "effects": {"free": 1}},
    {"id": 67, "question": "Economic regulation often brings more bad than good.", "effects": {"free": 1}},
    {"id": 68, "question": "The freedom of businesses is the best way society can prosper.", "effects": {"free": 1}},
    {"id": 69, "question": "The market regulates itself if the government steps away from the economy.", "effects": {"free": 1}},
    {"id": 70, "question": "It is necessary for the government to intervene in the economy to protect consumers.", "effects": {"free": 1}},
    {"id": 71, "question": "If corporations exist, they should mostly be state-owned.", "effects": {"free": 1}},
    {"id": 72, "question": "Children should always listen to their parents.", "effects": {"pat": 1}},
    {"id": 73, "question": "Having a minimum age for a job is crucial.", "effects": {"pat": 1}},
    {"id": 74, "question": "Older people often have more experience and knowledge.", "effects": {"pat": 1}},
    {"id": 75, "question": "If a child voluntary chooses to work, they should be allowed to work.", "effects": {"pat": 1}},
    {"id": 76, "question": "Young people are currently too excluded from many things.", "effects": {"pat": 1}},
    {"id": 77, "question": "Society doesn't need to be organized.", "effects": {"unru": 1}},
    {"id": 78, "question": "The current law system is too strict and absolute.", "effects": {"unru": 1}},
    {"id": 79, "question": "Without an organized system, society will be messy and chaotic.", "effects": {"unru": -1}},
    {"id": 80, "question": "Being organized is a positive trait.", "effects": {"unru": -1}},
    {"id": 81, "question": "Everybody should stay disciplined in most cases.", "effects": {"unru": -1}},
    {"id": 82, "question": "I have done many wrong things in th past.", "effects": {"imp": 1}},
    {"id": 83, "question": "I have broken the law before.", "effects": {"imp": 1}},
    {"id": 84, "question": "I am not perfect.", "effects": {"imp": 1}},
    {"id": 85, "question": "I am seen as a selfless and kind person by other people.", "effects": {"imp": -1}},
    {"id": 86, "question": "I often find myself hating other people.", "effects": {"imp": 1}},
    {"id": 87, "question": "Local governments can understand their citizens better than the national government could.", "effects": {"dec": 1}},
    {"id": 88, "question": "Laws should vary from area to area and culture to culture within a country.", "effects": {"dec": 1}},
    {"id": 89, "question": "A federal state is better than a unitary state.", "effects": {"dec": 1}},
    {"id": 90, "question": "Subdivisions should not be able to exempt from national laws.", "effects": {"dec": -1}},
    {"id": 91, "question": "The national government protects minorities better than some local governments do.", "effects": {"dec": -1}},
    {"id": 92, "question": "Most things can only be accomplished through a group.", "effects": {"nih": -1}},
    {"id": 93, "question": "If the current career system is being used, a person's personal and work life should stay seperate.", "effects": {"nih": 1}},
    {"id": 94, "question": "Being self-sufficient (as a person) is a positive trait.", "effects": {"nih": 1}},
    {"id": 95, "question": "My ideology could seem unworkable or scary to some people.", "effects": {"contra": 1}},
    {"id": 96, "question": "My ideology is contradictory.", "effects": {"contra": 1}},
    {"id": 97, "question": "When I describe my political beliefs, it could seem boring.", "effects": {"contra": -1}},
    {"id": 98, "question": "My political ideology has a substantial amount of followers.", "effects": {"contra": -1}},
    {"id": 99, "question": "Privacy is more important than security.", "effects": {"gadsen": 1}},
    {"id": 100, "question": "The government should not be involved in a person's personal life in any way.", "effects": {"gadsen": 1}},
    {"id": 101, "question": "Sometimes, spying on citizens is a good idea, in order to combat terrorism.", "effects": {"gadsen": -1}},
    {"id": 102, "question": "If a person has nothing to hide, he has nothing to fear.", "effects": {"gadsen": -1}},
    {"id": 103, "question": "It's a waste of time trying to rehabilitate some criminals.", "effects": {"puni": 1}},
    {"id": 104, "question": "I support the death penalty.", "effects": {"puni": 1}},
    {"id": 105, "question": "Rehablitation is more important than punishment.", "effects": {"puni": -1}},
    {"id": 106, "question": "The current law system is too strict.", "effects": {"puni": -1}},
    {"id": 107, "question": "Reality is shaped by human perception and understanding.", "effects": {"spir": 1}},
    {"id": 108, "question": "Reality is only reality when the mind or soul thinks it is.", "effects": {"spir": 1}},
    {"id": 109, "question": "Reality is an abstract idea that isn't described by an object.", "effects": {"spir": 1}},
    {"id": 110, "question": "All things are the result of interaction between objects.", "effects": {"spir": -1}},
    {"id": 109, "question": "Any thought or belief needs to be proven materialistically.", "effects": {"spir": -1}},
    {"id": 110, "question": "The Enlightenment was a mistake.", "effects": {"lcen": 1}},
    {"id": 111, "question": "Life was much better a few decades ago.", "effects": {"lcen": 1}},
    {"id": 112, "question": "I wish I could live in the past.", "effects": {"lcen": 1}},
    {"id": 113, "question": "The quality of life will improve substantially in the future.", "effects": {"lcen": -1}},
    {"id": 114, "question": "The future for human civilization looks bright.", "effects": {"lcen": 1}},
    {"id": 115, "question": "Life was horrible a few centuries ago.", "effects": {"lcen": 1}},
    {"id": 116, "question": "I want to live in the future.", "effects": {"lcen": 1}},
    {"id": 116, "question": "Abortion is murder.", "effects": {"pron": 1}},
    {"id": 117, "question": "It would be best if the birth rate was higher than it is currently.", "effects": {"pron": 1}},
    {"id": 118, "question": "Life is short but meaningful, we should not waste it.", "effects": {"pron": 1}},
    {"id": 119, "question": "A woman should be able to choose to abort a fetus.", "effects": {"pron": -1}},
    {"id": 120, "question": "Life has no real meaning.", "effects": {"pron": -1}},
    {"id": 121, "question": "It would be better if humans were extinct.", "effects": {"pron": -1}},
    {"id": 122, "question": "I have an IQ that's above 120.", "effects": {"incom": -1}},
    {"id": 123, "question": "Many people consider me intellegent.", "effects": {"incom": -1}},
    {"id": 124, "question": "It is difficult for me to construct a complete sentence.", "effects": {"incom": 1}},
    {"id": 125, "question": "Logic is a social construct.", "effects": {"incom": 1}},
    {"id": 126, "question": "I often contradict myself.", "effects": {"incom": 1}},
    {"id": 127, "question": "Climate change is not real.", "effects": {"clisk": 1}},
    {"id": 128, "question": "Finding ways to solve climate change is a waste of time.", "effects": {"clisk": 1}},
    {"id": 129, "question": "Protecting the environment is very important.", "effects": {"clisk": -1}},
    {"id": 130, "question": "We should slow down or reverse human progression in order to save the environment.", "effects": {"clisk": -2}},
    {"id": 131, "question": "The horseshoe theory is correct.", "effects": {"hors": 1}},
    {"id": 132, "question": "In a political chart, the more axes, the better.", "effects": {"hors": -1}},
    {"id": 133, "question": "A 1-axis political chart is incapable of describing most ideologies.", "effects": {"hors": -1}},
    {"id": 134, "question": "A progressive tax is a good idea.", "effects": {"ptax": 1}},
    {"id": 135, "question": "A flat tax system is better than a progressive tax system.", "effects": {"ptax": -1}},
    {"id": 136, "question": "Involuntary taxes should be abolished.", "effects": {"ptax": -1}},
    {"id": 133, "question": "Taxation is theft.", "effects": {"ptax": -1}},
    {"id": 134, "question": "The majority of a person's income should be go to taxes.", "effects": {"ptax": 1}},
    {"id": 135, "question": "I enjoy art that has a futuristic look.", "effects": {"pmart": 1}},
    {"id": 136, "question": "Postmodern expressionism is too underappreciated.", "effects": {"pmart": 1}},
    {"id": 137, "question": "Abstract art isn't art.", "effects": {"pmart": -1}},
    {"id": 134, "question": "Art from the Renaissance is better than modern art.", "effects": {"pmart": -1}},
    {"id": 134, "question": "Medieval Art looks good.", "effects": {"pmart": -1}},
    {"id": 135, "question": "We should only judge an action based on its consequence.", "effects": {"consq": 1}},
    {"id": 136, "question": "An action should be judged by a set of rules.", "effects": {"consq": -1}},
    {"id": 137, "question": "An eye for eye, and a tooth for tooth.", "effects": {"consq": 1}},
    {"id": 138, "question": "Work can be an enjoyable experience, as long as any person finds the right job for them.", "effects": {"enth": 1}},
    {"id": 139, "question": "Companies should be encouraged to reduce working hours.", "effects": {"enth": -1}},
    {"id": 140, "question": "I am productive.", "effects": {"enth": -1}},
    {"id": 141, "question": "Some offensive words or statements should be censored.", "effects": {"ahs": 1}},
    {"id": 142, "question": "Some words should be changed in order to increase inclusivity.", "effects": {"ahs": 1}},
    {"id": 143, "question": "The freedom of speech needs to protected.", "effects": {"ahs": -1}},
    {"id": 144, "question": "Any person should be able to say whatever they want without consequences.", "effects": {"ahs": -1}},

];
