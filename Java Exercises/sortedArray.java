public class SortedSearch {
    public static int countNumbers(int[] sortedArray, int lessThan) {
            if (sortedArray == null || sortedArray.length == 0) {
            throw new UnsupportedOperationException("invalid operation");
        }
    
        int left = 0;
        int right = sortedArray.length;
    
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (sortedArray[mid] < lessThan) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    
        return left;
    }
    
    public static void main(String[] args) {
        System.out.println(SortedSearch.countNumbers(new int[] { 1, 3, 5, 7 }, 4));
    }
}