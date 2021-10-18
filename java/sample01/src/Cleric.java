import java.util.*;

public class Cleric {
  String name;
  int hp = 50;
  final int MAX_HP = 50;
  int mp = 10;
  final int MAX_MP = 10;

  public void selfAid() {
    System.out.println("self aid.");
    mp -= 5;
    hp = MAX_HP;
    System.out.println("HP has been restored to maximum.");
  }

  public int play(int sec) {
    System.out.println("play for " + sec + " second(s).");
    int recover = new Random().nextInt(3) + sec;
    int recoverActual = Math.min(this.MAX_MP - this.mp, recover);

    this.mp += recoverActual;
    System.out.println("MP recovered " + recoverActual + " point(s).");
    return recoverActual;
  }
}
