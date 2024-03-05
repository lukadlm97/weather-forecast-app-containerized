var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var MyAllowSpecificOrigins = "MyPolicy";
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:8080")
                                   .AllowAnyMethod()
                                   .AllowAnyHeader();
                      });
});

var app = builder.Build();


app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("MyPolicy");
app.UseAuthorization();

app.MapControllers(); 

app.Run();
