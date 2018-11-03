import java.util.HashSet;

public class solutions {

    public static void main(String[] args) {
        String str = "Abracadabra";
        System.out.print("\ninput string: " + str+"\n");
        System.out.println(booleanArr(str));
        System.out.println(HashSet(str));
    }

    // HashSet Method:
    public static boolean HashSet(String str) {
        System.out.print("\nHashSet Initiated...\n");
        HashSet<Character> h = new HashSet<Character>();
        System.out.print("\nIterating through " + str + "...\n");
        for(int i = 0; i < str.length(); i++) {
            if(h.contains(str.charAt(i))) 
            {
                System.out.println("FALSE: Duplicate char `"+str.charAt(i)+"` found!");                
                return false;
            }
            System.out.println(str.charAt(i) + " added to hash set");
            h.add(str.charAt(i));
        }
        return true;
    }


    // boolean Array method:
    public static boolean booleanArr(String str) {
        System.out.print("\nbooleanArr Initiated...\n");
        if(str.length() > 256)
            return false;
        boolean[] charArr = new boolean[256];
        System.out.print("\nIterating through " + str + "...\n");
        for(int i = 0; i < str.length(); i++) {
            // int converts to ascii int value
            int value = str.charAt(i);
            if(charArr[value])
            {
                System.out.println("FALSE: Duplicate char `"+str.charAt(i)+"` found at index " + value);                
                return false;
            }
            System.out.println("index " + value + " set to true");
            charArr[value] = true;
        }
        return true;
    }
}