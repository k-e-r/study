public class Wizard {
  String name;
  int hp;

  public void heal(Hero h) {
    h.hp += 10;
    System.out.println(h.name + "'s HP was restored 10 points.");
  }
}
