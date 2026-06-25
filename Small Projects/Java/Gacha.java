import java.util.Random;
    import java.util.Scanner;

    public class Gacha {
        public static void main (String[] args) {
            Scanner s = new Scanner (System.in);
            Random r = new Random();

            int rcount = 0;
            int srcount = 0;
            int ssrcount = 0;
            int urcount = 0;
            int uurcount = 0;

            int tickets;
            String[] characters = {"Nothing", "Snow White", "Rapunzel", "Ariel", "Egg"};

            System-.out.print("Number of tickets: ");
            tickets = s.nextInt();

            for (int i = 1; i <= tickets; i++) {
                int roll = r.nextInt(100) + 1;
