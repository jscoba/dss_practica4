from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.TextField(blank=False)
    description = models.TextField(blank=True)
    price = models.FloatField(blank=False)


class UserLocation(models.Model):
    user_id = models.TextField(blank=False)
    location = models.TextField(blank=False)

class ShoppingCart(models.Model):
    user_id = models.TextField(blank=False)
    items = models.ManyToManyField(to=Product)

    def total_grant(self):
        price = 0.0
        for p in self.items:
            price += p.price
        return price