explain thread class and its subclasses from java to me like I am 12 year old with an example program

Threads are like helpers that can run different tasks at the same time on a computer. Think of it like having multiple workers at a factory. Each worker can do a different job, but they all work together to get everything done faster.

Java has a class called "Thread" that helps create and control these workers, or threads. You can make your own class that is a subclass of Thread, and it will have all the abilities of a regular Thread, but you can add extra things to it as well.

For example, let's say you have a program that makes cookies. The main part of the program is a recipe that tells the computer what ingredients to use and how to mix them together. But you also want the program to print out the temperature of the oven every minute.

You could make a separate thread that just checks the temperature and prints it out. This way, the main thread can focus on making the cookies, and the temperature thread can focus on checking and printing. The two threads will work together at the same time, so the cookies will be done and the temperature will be printed out at the same time.

Here's an example program that shows how this works:

        class CookieThread extends Thread {
            public void run() {
                // make the cookies
            }
        }
        class TemperatureThread extends Thread {
            public void run() {
                while (true) {
                    // check the temperature
                    // print out the temperature
                    try {
                        Thread.sleep(60 * 1000); // sleep for 60 seconds
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        public class Main {
            public static void main(String[] args) {
                CookieThread cookies = new CookieThread();
                TemperatureThread temp = new TemperatureThread();
                cookies.start();
                temp.start();
            }
        }

In this example, we have two subclasses of Thread: "CookieThread" and "TemperatureThread". The "CookieThread" class has a "run" method that makes the cookies, and the "TemperatureThread" class has a "run" method that checks and prints the temperature.

In the main part of the program, we create a new "CookieThread" and a new "TemperatureThread". We then start both threads, so they will both start running at the same time. The "CookieThread" will make the cookies, and the "TemperatureThread" will check and print the temperature, and they will work together to get everything done faster.