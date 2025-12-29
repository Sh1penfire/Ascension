function end(){
  Vars.player.team().cores().each(c => c.kill());
  Sounds.wind3.play();
}

Events.on(UnitDestroyEvent, e => {
  if(e.unit.team == Vars.player.team()) end();
});

Events.on(BlockDestroyEvent, e => {
  if(e.tile.build.team == Vars.player.team() && !(e.tile.build.block.class instanceof CoreBlock)) end();
});
