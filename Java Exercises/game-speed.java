public class GamePlatform {
    public static double calculateFinalSpeed(double initialSpeed, int[] inclinations) {

        // calculate the currentSpeed for the initial speed
        double currentSpeed = initialSpeed;
        // iterate the inclinations array
        for(int i = 0; i < inclinations.length; i++){
            if(inclinations[i] >= 0)
                currentSpeed = currentSpeed - (double) inclinations[i]; // going up decreases speed
            else
                currentSpeed = currentSpeed + (double) inclinations[i]; // going down increases speed

            if (currentSpeed <= 0)
                return 0;
        }
        return currentSpeed;
    }

    public static void main(String[] args){
        System.out.println(calculateFinalSpeed(60.0, new int[] { 0, 30, 0, -45, 0 }));
    }
}