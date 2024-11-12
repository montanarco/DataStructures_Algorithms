import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'dayOfProgrammer' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts INTEGER year as parameter.
     */

    public static String dayOfProgrammer(int year) {
        if (year == 1918)
            return "26.09.1918";
    // Write your code here
    int[] daysOfNoLeapYearByMonth = new int[]{31,28,31,30,31,30,31,31,30,31,30,31};
    int programerDay = 256;
    boolean isLeap = false;
    //check if year minor than 1917 or higher than 1919
    if(year <= 1917){
        // find if is leap year this way; year % 4 == 0
        if(year % 4 == 0)
            isLeap = true;
    }
    if(year >= 1919){
        // find leap this way; (year % 4 == 0 and year % 100 !==0) or (year % 400 == 0)
        if( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 )
            isLeap = true;
    }
    int elapsedDays = daysOfNoLeapYearByMonth[0];
    int elapsedMonths = 0;
    for (int i = 1; i < daysOfNoLeapYearByMonth.length; i++){
        // count days of month (elapseddays) plus sum of previous months days
        elapsedMonths = i;
        if((elapsedDays + daysOfNoLeapYearByMonth[i]) < programerDay)
            elapsedDays += daysOfNoLeapYearByMonth[i];
        else
            break;
    }
    String stringMonths;
    if (elapsedMonths + 1 <10)
        stringMonths = "0"+(elapsedMonths + 1);
    else
        stringMonths = "" + (elapsedMonths + 1);
    // count remaining days to 265 
    System.out.println("elapsedDays: " + elapsedDays);
    int remainigDays = programerDay - elapsedDays;

    if(isLeap){
        return (remainigDays - 1) + "."+ stringMonths + "." + year;
    }else{
        return remainigDays + "."+ stringMonths + "." + year;
    }
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int year = Integer.parseInt(bufferedReader.readLine().trim());

        String result = Result.dayOfProgrammer(year);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
