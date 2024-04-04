package Testing;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SignUpPage {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		ChromeDriver driver = new ChromeDriver();
		driver.get("http://localhost:3000/");
		driver.manage().window().maximize();
		//driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[3]/div/div/form/div[4]/div[2]/button")).click();
		Thread.sleep(2000);
		driver.findElement(By.id("firstname")).sendKeys("Abhishek");
		driver.findElement(By.id("lastname")).sendKeys("Sharma");
		driver.findElement(By.id("email")).sendKeys("L00171125@atu.ie");
		driver.findElement(By.id("password")).sendKeys("abhishek");
		driver.findElement(By.id("cpassword")).sendKeys("abhishek");
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(0,200)");
		Thread.sleep(1000);
		driver.findElement(By.name("termsCheck")).click();
		driver.findElement(By.name("register")).click();
		Thread.sleep(1000);
		Alert alertwindow = wait.until(ExpectedConditions.alertIsPresent());
		Thread.sleep(1000);
		alertwindow.accept();
		Thread.sleep(2000);

	}

}
