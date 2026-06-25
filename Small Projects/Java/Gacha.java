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
                
                if (roll <= 60) {
                    System.out.println("You got " + characters[0] + "!");
                    rcount++;
                } else if (roll <= 75) {
                    System.out.println("You got " + characters[3] + "!");
                    srcount++;
                } else if (roll <= 85) {
                    System.out.println("You got " + characters[2] + "!");
                    ssrcount++;
                } else if (roll <= 95) {
                    System.out.println("You got " + characters[1] + "!");
                    urcount++;
                } else {
                    System.out.println("You got " + characters[4] + "!");
                    uurcount++;
                }  
            }
            System.out.println("\nResults:");
            System.out.println("R: " + rcount);
            System.out.println("SR: " + srcount);
            System.out.println("SSR: " + ssrcount);
            System.out.println("UR: " + urcount);
            System.out.println("UUR: " + uurcount);
            s.close();
        }
        
    }
