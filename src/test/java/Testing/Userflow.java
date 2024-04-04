package Testing;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Userflow {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		ChromeDriver driver = new ChromeDriver();
		driver.get("http://localhost:3000/");
		driver.manage().window().maximize();
		//driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		//Adding credentials in login page 
		driver.findElement(By.id("email")).sendKeys("L00171125@atu.ie");
		Thread.sleep(1000);
		driver.findElement(By.id("password")).sendKeys("abhishek");
		driver.findElement(By.name("login")).click();
		
		//Handling popup
		//Alert alertwindow = driver.switchTo().alert();
		Alert alertwindow = wait.until(ExpectedConditions.alertIsPresent());
		Thread.sleep(1000);
		alertwindow.accept();
		Thread.sleep(2000);
		
		//Selecting park
		
		driver.findElement(By.name("thrillville")).click();
		Thread.sleep(2000);
		
		// Selecting Adventures 
		driver.findElement(By.id("rockClimbingCheckbox")).click();
		driver.findElement(By.id("4dCoaster")).click();
		Thread.sleep(1000);
		//Scrolling for Terms and conditions
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(0,300)");

		Thread.sleep(1000);
		driver.findElement(By.name("termsCheck1")).click();
		driver.findElement(By.name("termsCheck2")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[4]/div[2]/button")).click();
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[4]/div[1]/button")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/button")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("teaCups")).click();
		jse.executeScript("window.scrollBy(0,300)");

		Thread.sleep(1000);
		driver.findElement(By.name("termsCheck1")).click();
		driver.findElement(By.name("termsCheck2")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[4]/div[3]/button")).click();
		Thread.sleep(1000);
		
		 
	     driver.findElement(By.name("name")).sendKeys("Abhishek Sharma");
	     driver.findElement(By.name("email")).sendKeys("L00171125@atu.ie");
	     driver.findElement(By.name("address")).sendKeys("ATU");
	     driver.findElement(By.name("contact")).sendKeys("0894401841");
	     driver.findElement(By.name("date")).sendKeys("03/12/2024");
	     Thread.sleep(1000);
	     driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div[6]/div[2]/div/div[2]/div/button[1]")).click();
	     Thread.sleep(1000);
	     driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div[6]/div[2]/div/div[2]/div/button[1]")).click();
	    driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div[7]/div/button")).click();
	    
		Alert alertwindow2 = wait.until(ExpectedConditions.alertIsPresent());
		Thread.sleep(1000);
		alertwindow2.accept();
		
		String booking = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div/h2")).getText();
		System.out.println(booking);
		Thread.sleep(2000);
		driver.close();
		

	}

}
