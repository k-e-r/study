const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  Options: {
    width: 800,
    height: 600,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true,
});
console.log(shape);
World.add(world, shape);

const shape2 = Bodies.rectangle(100, 100, 50, 50, {
  isStatic: true,
});
console.log(shape2);
World.add(world, shape2);
