import java.util.List;
import java.util.Arrays;

public class WeightedAverage
{
    public static double mean(List<Integer> numbers, List<Integer> weights)
    {
        if(numbers == null || weights == null){
            throw new IllegalArgumentException("inputs can not be null");    
        }
        if(numbers.size() != weights.size()){
            throw new IllegalArgumentException("inputs need to have same length");
        }
        
        int total = 0;
        int totalWeights = 0;
        
        for (int i = 0; i < numbers.size(); i++)
        {
            total += numbers.get(i) * weights.get(i);
            totalWeights += weights.get(i);
        }

        if(totalWeights == 0){
            throw new IllegalArgumentException("weigth should not be Zero");
        }

        return (double) total / totalWeights;
    }

    public static void main(String[] args)
    {
        List<Integer> a = Arrays.asList(new Integer[] { 3, 6 });
        List<Integer> b = Arrays.asList(new Integer[] { 4, 2 });

        System.out.println(WeightedAverage.mean(a, b));
    }
}