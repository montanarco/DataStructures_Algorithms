public class AirportNetworks {
    public static int getCount(boolean[][] matrix) {
        if(matrix == null || matrix.length == 0){
            throw new UnsupportedOperationException("Waiting to be implemented");
        }

        // if airport i and airpot j difference == 1 or -1 no conection is requiered
        // other airports will need conection 
        // if fligth [i][j] == false 
        // connectionRequiered ++;
        int connertionRequiered = 0;
        for(int i = 0; i < matrix.length; i++){ // iterate columns
            for(int j = 0; j < matrix.length; j++){ // iterate rows
                int distance = i - j;
                boolean adjacents = (distance == 1 || distance == -1);
                if (!adjacents && matrix[i][j]){ 
                    connertionRequiered ++;
                }
            }
        }
        return connertionRequiered/2;
    }

    public static void main(String[] args) {
        boolean[][] matrix = {
            {false, true, false, false, false},
            {true, false, false, false, false},
            {false, false, false, true, false},
            {false, false, true, false, false},
            {false, false, false, false, false}
        };
        System.out.println(getCount(matrix)); // should print 6
    }
}