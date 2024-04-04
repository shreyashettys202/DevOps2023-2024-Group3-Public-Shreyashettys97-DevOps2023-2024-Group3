package Testing;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BookingFlow {

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
		
		 driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[1]/div[2]/a")).click();
		 Thread.sleep(2000);
		 int r = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div/table/tbody//tr")).size();
		 //System.out.println(r);
		 int c = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]//td")).size();
		// System.out.println(c);
		 int head= driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div/table/thead//th")).size();
		 
		 for(int j=1;j<=head;j++) {
			 String heading = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div/table/thead//th["+j+"]")).getText();
			 System.out.print(heading+"    ");
		 }
		 System.out.println();
		 
		 for(int rows =1; rows<=r;rows++) 
		 {
			 for (int cols=1;cols<=c; cols++) {
				 
				 
				 String value = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div[2]/div[2]/div/div/table/tbody//tr["+rows+"]//td["+cols+"]")).getText();
				 System.out.print(value+"    ");
			 }
			 System.out.println();
		 }
		 Thread.sleep(1000);
		 driver.close();
	
	}

}
