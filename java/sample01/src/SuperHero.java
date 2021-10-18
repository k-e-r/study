public class SuperHero extends Hero {
  boolean flying;

  public void fly() {
    this.flying = true;
    System.out.println("fly.");
  }

  public void land() {
    this.flying = false;
    System.out.println("land.");
  }
}
