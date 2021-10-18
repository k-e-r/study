public class Hero {
  String name;
  int hp;

  public Hero(String name) {
    this.hp = 100;
    this.name = name;
  }

  public Hero() {
    this("dummy");
  }

  public void attack(Matango m) {
    System.out.println(this.name + " attack.");
    m.hp -= 5;
    System.out.println("He gave 5 points damage.");
  }

  public void sleep() {
    this.hp = 100;
    System.out.println(this.name + " slept and recovered.");
  }

  public void sit(int sec) {
    this.hp += sec;
    System.out.println(this.name + " sat for " + sec + " second(s).");
    System.out.println("HP recovered " + sec + " point(s).");
  }

  public void slip() {
    this.hp -= 5;
    System.out.println(this.name + " fell down.");
    System.out.println("5 damage.");
  }

  public void run() {
    System.out.println(this.name + " ran off.");
    System.out.println("GAMEOVER");
    System.out.println("The final HP was " + this.hp + ".");
  }
}
