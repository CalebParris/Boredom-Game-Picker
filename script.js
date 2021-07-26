let gameChoice = ["Amazing Frog","Among Us","BeamNG.drive","Bendy and the Ink Machine","Black Mesa","Boris and the Dark Survival","Brick Rigs","Call of Duty: WWII","Day of Defeat","Day of Defeat: Source","Disassembly 3D","Fallout 4","Freddie Fish and the Case of the Missing Kelp Seeds","Fun with Ragdolls: The Game","Garry's Mod","Goat Simulator","Half-Life","Half-Life 2","Half-Life 2: Deathmatch","Half-Life 2: Episode One","Half-Life 2: Episode Two","Half-Life Deathmatch: Source","Hello Neighbor","Hello Neighbor 2 Alpha 1.5","Hello Neighbor Alpha 1","Hello Neighbor Alpha 2","Hello Neighbor Alpha 3","Hello Neighbor: Hide and Seek", "The Henry Stickmin Collection","Human: Fall Flat", "Kerbal Space Program","Left 4 Dead 2","Minecraft","Naruto Sippuden: Ultimate Ninja Storm 4","Pajama Sam in No Need to Hide When It's Dark Outside","People Playground","Portal","Portal 2","Rec Room","SCP: Secret Laboratory","SCP strategy Demo","Simple Planes","Sonic and Sega All Stars Racing","Source Filmmaker","Spy Fox in: Dry Cereal","Stormworks: Build and Rescue", "Team Fortress 2","Teardown","Titanic: The Experience","Ultimate Epic Battle Simulator","War Thunder"];


function randomGame(){
    return gameChoice[Math.floor(Math.random()*gameChoice.length)];
}

$("#btn").on("click", function(event){
    event.preventDefault();
    let gameName = $('#gameTitle')
    gameName.text(randomGame()),
    gameName.removeClass("hidden")
});