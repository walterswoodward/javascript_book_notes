// This problem is REALLY meant to be done in JAVA, as it is relatively simple
// to implement in javascript. This is a very peculiar problem with very
// specific parameters. Your input is a string with exactly the number of
// additional spaces (OR MORE) at the end of it in order to be able to map the
// new string WITH spaces replaced with `%20` without running into a array
// capacity error.

public class Solution {
	// // Another way to print URLify is by creating a class Solution 
	// public static void main(String[] args) {
	// 	// Creating an instance/object of Solution `u`
	// 	Solution u = new Solution();
	// 	// Defining inputs
	// 	char[] str = "Mr John Smith    ".toCharArray();
	// 	// Then printing URLify as a method on u
	// 	System.out.println(u.URLify(str, 13));
	// }

	public static void main(String[] args) {
		char[] str = "Mr John Smith    ".toCharArray();
		System.out.println(URLify(str, 13));
	}

	public static String URLify(char[] str, int trueLength) {
		// Edge Case
		if (str == null) {
			return "";
		}
		int spaceCount = 0;
		int index = 0;
		// Calculate the total length of the desired output array and store in
		// `index` variable
		for (int i = 0; i < trueLength; i++) {
			// System.out.println("[" + str[i] + "]");
			if (str[i] == ' ') {
				spaceCount++;
			}
		}
		// The last indice in the output array will equal 17 since the true length =
		// 13, plus the two spaces which each need to be replaced by (%20) e.g. 2
		// spaces * 2 additional slots = 4.  
		index = trueLength + spaceCount * 2;

	// Remove any unnecessary additional white space based `index`:
	if (trueLength < str.length) str[trueLength] = '\0'; // e.g. END of Array
		// System.out.println("index: " + index); // 17
		// rebuilds entire string with %20's in place starting from the True End (i = 12)
		// str[16] through str[14] is `htimS`
		// str[11] through str[9] is `%20`
		// str[8] through str[5] is `nhoJ`
		// str[4] through str[2] is `%20`
		// str[1] through str[0] is `rM` 
		// Read front to back => "Mr%20John%20Smith -- VOILA!"
		for (int i = trueLength - 1; i >= 0; i--) {
			if (str[i] == ' ') {			
				str[index - 3] = '%';
				str[index - 2] = '2';
				str[index - 1] = '0';
				// System.out.println("if: " + "str[index - 2] = " + str[index - 2] + ", str[index - 1] = " + str[index - 1] + ", and str[index] = " + str[index]  );
				index -= 3;
			} else {
				// System.out.println("else: Set str[" + (index - 1) + "] to value of str[" + i +"] => " + str[i]);
				str[index - 1] = str[i];
				index--;
			}
		}
		return new String(str).trim();
	}
}