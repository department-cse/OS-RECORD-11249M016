 1. To Find Whether a Number is Even or Odd
#!/bin/bash

# Read a number from user input
echo "Enter a number:"
read num

# Check if the number is divisible by 2 (even) or not (odd)
if [ $(($num % 2)) -eq 0 ]; then
    echo "$num is Even"
else
    echo "$num is Odd"
fi


2. To Find the Biggest of Two Numbers
#!/bin/bash

# Read two numbers from user input
echo "Enter first number:"
read num1
echo "Enter second number:"
read num2
# Compare the numbers and find the biggest
if [ $num1 -gt $num2 ]; then
    echo "$num1 is the biggest"
elif [ $num1 -lt $num2 ]; then
    echo "$num2 is the biggest"
else
    echo "Both numbers are equal"
fi


3. To Find the Biggest of Three Numbers
#!/bin/bash

# Read three numbers from user input
echo "Enter first number:"
read num1
echo "Enter second number:"
read num2
echo "Enter third number:"
read num3

# Compare the numbers and find the biggest
if [ $num1 -gt $num2 ] && [ $num1 -gt $num3 ]; then
    echo "$num1 is the biggest"
elif [ $num2 -gt $num1 ] && [ $num2 -gt $num3 ]; then
    echo "$num2 is the biggest"
else
    echo "$num3 is the biggest"



4. To Find the Factorial of a Number
#!/bin/bash

# Read a number from user input
echo "Enter a number:"
read num

# Initialize factorial variable
factorial=1

# Loop to calculate factorial
for (( i=1; i<=$num; i++ ))
do
    factorial=$((factorial * i))
done

echo "Factorial of $num is $factorial"


5. To Display Fibonacci Series
#!/bin/bash

# Read the number of terms for the Fibonacci series
echo "Enter the number of terms:"
read terms

# Initialize first two terms
a=0
b=1

# Print the Fibonacci series
echo "Fibonacci Series:"
for (( i=0; i<$terms; i++ ))
do
echo -n "$a "
    # Update a and b for the next term
    next=$((a + b))
    a=$b
    b=$next
done
echo
