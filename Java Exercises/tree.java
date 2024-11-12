public class InternalNodes {
    public static int count(int[] tree) {
        if(tree == null || tree.lenght == 0){
            throw new UnsupportedOperationException("Invalid Input.");
        }
        
    }

    public static void main(String[] args) {
        System.out.println(InternalNodes.count(new int[] { 1, 3, 1, -1, 3 }));
    }
}